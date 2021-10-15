/*
    Sound rendering system
*/

import Speaker from 'speaker';
import audioEngine from  'web-audio-engine';
import fs from 'fs';

const {StreamAudioContext: AudioContext} = audioEngine;
const builder = {};

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

    return new Promise((resolve, reject) => {

        const context = new AudioContext();
        
        const audioData = fs.readFileSync("./sound-engine/presets/kick.wav");
        context.pipe(new Speaker());
        context.resume();

        context.decodeAudioData(audioData).then((audioBuffer) => {
            //console.log(audioBuffer);
            let ps = context.createBufferSource();
            ps.buffer = audioBuffer;
            ps.connect(context.destination);
            ps.start(context.currentTime);
        });

        const amp = context.createGain();
        
        // amp.gain.setValueAtTime(0.25, 0);
        // amp.gain.setValueAtTime(0.25, 0.075);
        // amp.gain.linearRampToValueAtTime(0, 2);
        // amp.connect(context.destination);
        
        

        resolve();
        
    })

}

export default builder;