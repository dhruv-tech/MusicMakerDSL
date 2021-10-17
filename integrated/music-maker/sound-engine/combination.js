/* 
    Sound Executtion System
*/

const player = {};
import Crunker from 'crunker';
player.render = async(combination, audioData) => {

    return new Promise(async(resolve, reject) => {

        // Iterate tracks
        console.log(combination)
        for (let track of combination.tracks) {
            
            let offset = track.offset ? track.offset : 0;
            let volume = track.volume/100;
            let limit = track.maxLength;

            for (let component of track.components) {

                let audio = audioData.get(component.name);
                if (audio.type == 'buffer') {

                    const context = new AudioContext();
                    const play = context.createBufferSource();

                    // Manage Repeat

                    let repeat = (component.repeat < limit) ? component.repeat : limit;

                    let crunker = new Crunker();
                    let repeatedBufferSpec = [audio.buffer];
                    for (let i = 1; i < repeat; i++) {
                        repeatedBufferSpec.push(audio.buffer);
                    }
                    play.buffer = crunker.concatAudio(repeatedBufferSpec);


                    let amplifier = context.createGain();

                    play.connect(amplifier);
                    amplifier.gain.setValueAtTime(volume, context.currentTime);
                    amplifier.connect(context.destination);
                    play.start(context.currentTime + offset);
                    resolve();
                }
            }
        }
        // Iterate components
        
        // Create ctx for each component and set volume using gain node
        // Play with offset

        // Return ctx to control playback later

    })
}

export default player;