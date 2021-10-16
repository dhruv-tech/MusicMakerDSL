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

const builder = {};
const soundMap = new Map([['kick' , kick], ['OpenHats', oHats], ['ClosedHats', cHats], ['snare', snare], ['bass', bass]]);
builder.render = (soundSpec) => {

    return new Promise(resolve => {

        let file;

        if (soundSpec.type = 'Preset') {
            file = generateFromPreset(soundSpec);
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

        resolve({error: null, buffer: output});
        
    })

}

export default builder;