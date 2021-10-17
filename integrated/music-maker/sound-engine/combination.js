/* 
    Module for sound execution; Processes the selected combination block.
*/

const player = {};
import Crunker from 'crunker';

player.render = async(combination, audioData) => {

    return new Promise(async(resolve, reject) => {

        for (let track of combination.tracks) {
            
            let offset = track.offset ? track.offset : 0;
            let volume = track.volume/100;
            const context = new AudioContext();
            
            playComponents(track.components, context, offset, volume, audioData);
        }

    })
}

// Private Helpers

/* Plays components sequencially*/

const playComponents = async(components, context, offset, volume, audioData) => {

    await delay(offset);

    for (let component of components) {

        let audio = audioData.get(component.name);
        await playComponent(audio, context, volume, component.repeat);
    }

}

/* Plays a single component */

const playComponent = (audio, context, volume, repeat) => {
    return new Promise(async(resolve, reject) => {
        if (audio.type == 'buffer') {

            await renderBuffer(audio.buffer, context, volume, repeat);
            resolve();

        } else if (audio.type == 'sequence') {

            await renderNotes(audio.sequence, context, volume, repeat);
            resolve();

        }
    });
}

/* Renders a preset buffer component */

const renderBuffer = (buffer, context, volume, repeat) => {

    return new Promise((resolve, reject) => {

        const play = context.createBufferSource();

        // Manage Repeat

        let crunker = new Crunker();
        let repeatedBufferSpec = [buffer];

        for (let i = 1; i < repeat; i++) {
            repeatedBufferSpec.push(buffer);
        }
        
        play.buffer = crunker.concatAudio(repeatedBufferSpec);

        // Set Volume

        let amplifier = context.createGain();
        play.connect(amplifier);
        amplifier.gain.setValueAtTime(volume, context.currentTime);

        // Send sound to audio output devices

        amplifier.connect(context.destination);
        play.start(context.currentTime);
        play.stop(context.currentTime + play.buffer.duration);
        
        play.addEventListener('ended', () => resolve());
    });

}

/* Renders a clip sequence component */

const renderNotes = (seq, context, volume, repeat) => {
    return new Promise(async(resolve, reject) => {

        // Manage Repeat

        let temp = seq;
        for (let i = 1; i < repeat; i++) {
            seq = seq.concat(temp);
        }

        // Manage rendering for each individual note

        for (let freq of seq) {
            await renderNote(freq, context, volume);
        }
        resolve();
    })
}

/* Renders a single note from a clip sequence component */

const renderNote = (freq, context, volume) => {

    return new Promise((resolve) => {

        // Configure sine wave oscillator

        let osc = context.createOscillator();
        osc.type = 'sine';

        // Set Volume

        let amplifier = context.createGain();
        amplifier.gain.setValueAtTime(volume, context.currentTime);
        osc.connect(amplifier);

        // Establish connection with audio output devices

        amplifier.connect(context.destination);

        // Oscillate at frequency of current note for 0.47 seconds

        osc.frequency.value = freq;
        osc.start(context.currentTime);

        // Smoothly stop osillation

        amplifier.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.465);
        osc.stop(context.currentTime + 0.47);

        osc.addEventListener('ended', () => resolve());
    })

}

/* Delays execution of next line of code by given amount of milliseconds */

const delay = (time) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

}

export default player;