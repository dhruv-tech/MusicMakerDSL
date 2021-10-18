/*
    Sound engine entrypoint
*/

import soundBuilder from "./sound.js";
import combinationPlayer from "./combination.js";
import Crunker from 'crunker';
const engine = {};

let recorder;

engine.build = (specs) => {

    return new Promise(async(resolve, reject) => {
        console.log(specs);
        // Validate
    
        for (let [spec, idx] of specs.entries()) {

            let firstKey = Object.keys(spec)[0];
            if (firstKey === 'error') {
                reject({error: `Sound/Combination Block ${idx}: ${spec.error}`});
            }
        }

        // Process Sounds

        let sounds = specs.filter((block) => {
            return block.type === 'Sound';
        });

        let audioData = new Map();
        for (let sound of sounds) {
            console.log(sound);
            try {
                let data = await soundBuilder.render(sound);
                audioData.set(sound.name, data);
            } catch (error) {
                reject(error);
            }
            
        }

        // Process Combination

        let combinations = specs.filter((block) => {
            return block.type === 'Combination';
        });

        // Process Play

        let play = specs.filter((block) => {
            return (Object.keys(block)[0] == 'play');
        });

        if (play.length > 1) {
            reject("Only one play block is allowed");
        }

        let toPlay = null;
        let combinationNames = [];
        
        for (let combination of combinations) {

            if (combinationNames.indexOf(combination.name) != -1) {

                reject(`Not allowed: Multiple play blocks named ${combination.name}`);

            } else if (combination.name == play[0].play) {
                toPlay = combination;
            }

            combinationNames.push(combination.name);
        }

        if (toPlay == null) {

            reject(`No combination block named ${play[0].play}`);
        }

        try {

            const context = new AudioContext();
            const stereoMix = context.createMediaStreamDestination();
            recorder = new MediaRecorder(stereoMix.stream, { audioBitsPerSecond : 75000 });
            console.log(context);
            console.log(recorder);
            recorder.start();

            await combinationPlayer.render(toPlay, audioData, context, stereoMix);

            let recordingLink = await getRecording();
            let recording = {
                name: toPlay.name,
                link: recordingLink,
                time: Date.now()
            }
            resolve(recording);
        } catch (error) {
            reject(error);
        }

    });

}

const getRecording = () => {
    return new Promise((resolve, reject) => {
        recorder.addEventListener('dataavailable', async(e) => {
        
            let arrayBuffer = await e.data.arrayBuffer();
            let recording_context = new AudioContext();
            let decodedAudio = await recording_context.decodeAudioData(arrayBuffer);
    
            let crunker = new Crunker();
            let res = crunker.export(decodedAudio);
            recorder = null;
    
            resolve(res.url);
        });
    
        recorder.stop();
    })
    
}

export default engine;