/*
    Sound rendering system
*/

import scribble from 'scribbletune/browser.js';
import Crunker from 'crunker';

// Sounds

import kick from '../src/assets/presets/kick.wav';
import cHats from '../src/assets/presets/closedhats.wav';
import oHats from '../src/assets/presets/oh.wav';

import snare from '../src/assets/presets/snare.wav';
import bass from '../src/assets/presets/bass.wav';

const soundMap = new Map([['Kick' , kick], ['OpenHats', oHats], ['ClosedHats', cHats], 
['Snare', snare], ['Bass', bass]]);

const builder = {};

builder.render = async(soundSpec) => {

    return new Promise(async(resolve) => {

        let file;

        if (soundSpec.subtype == 'Preset') {
            let x = await generateFromPreset(soundSpec);
            resolve('000');
        } else if (soundSpec.subtype == 'Clip'){
            let y = await generateFromClip(soundSpec);
            resolve('000');
        }

    })
}

const generateFromPreset = (soundSpec) => {

    return new Promise(async(resolve, reject) => {

        let context = new AudioContext();

        // Manage Effect

        let selectedPreset = soundMap.get(soundSpec.usesound);
        let rawData = await fetch(selectedPreset);
        let arrayBuffer = await rawData.arrayBuffer();
        let decodedAudio = await context.decodeAudioData(arrayBuffer);

        let emptyAudio = context.createBuffer(2, decodedAudio.length, context.sampleRate);

        // Manage Pattern

        let crunker = new Crunker();
        let patternArray = soundSpec.pattern.split('');
        
        let crunkerManifest = [];

        for (let pattern of patternArray) {
            console.log(pattern);
            if (pattern == 'x') {
                crunkerManifest.push(decodedAudio);
            } else if (pattern == '-') {
                crunkerManifest.push(emptyAudio);
            } else {
                reject({error: true, desc: `Format of pattern in sound block '${soundSpec.name}' is not valid`});
            }
        }

        // Manage Repeat

        for (let i = 1; i < soundSpec.repeat; i++) {
            crunkerManifest = crunkerManifest.concat(crunkerManifest);
        }

        // Output

        let output = await crunker.concatAudio(crunkerManifest);

        // const play = context.createBufferSource();
        // play.buffer = output;
        // play.connect(context.destination);
        // play.start(context.currentTime + 0.25);

        resolve({error: null, type: 'buffer', buffer: output});
        
    })

}

const generateFromClip = (soundSpec) => {

    return new Promise((resolve, reject) => {
        const notes = ["C", "C#", "D", "EB", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
        let notesSeq = [];

        let notesInput = soundSpec.usesound.split(' ');
        for (let note of notesInput) {

            note = note.toUpperCase();

            let noteLetter = (note.length == 2) ? note[0] : note.substring(0,2);
            let noteOctave = (note.length == 2) ? parseInt(note[1]) : parseInt(note[2]);
            let stp = notes.indexOf(noteLetter);
            let factor = Math.pow(2, (noteOctave*12 + stp-57)/(12));
            let freq = factor * 440;

            if (stp == -1) {
                reject({error: true, desc: `Sequence of notes in sound block '${soundSpec.name}' is not valid`});

            } else {

                notesSeq.push(freq);
                resolve({error: null, type: 'sequence', sequence: notesSeq});

            }
        }
    })


}

export default builder;