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

        // Validate
    
        for (let [spec, idx] of specs.entries()) {

            let firstKey = Object.keys(spec)[0];
            if (firstKey == 'error') {
                reject({error: `Sound/Combination Block ${idx}: ${spec.error}`});
            }
        }

        // Process Sounds

        let sounds = specs.filter((block) => {
            return block.type == 'Sound';
        });

        let audioData = new Map();
        for (let sound of sounds) {
            try {
                let data = await soundBuilder.render(sound);
                audioData.set(sound.name, data);
            } catch (error) {
                reject(error);
            }
            
        }

        // Process Combination
        let combination = specs.filter((block) => {
            return block.type == 'Combination';
        });

        if (combination.length > 1) {
            reject({error: `Only one combination block is allowed`});
        }

        try {
            const context = new AudioContext();
            const destination = context.createMediaStreamDestination();
            recorder = new MediaRecorder(destination.stream);
            recorder.start();
            await combinationPlayer.render(combination[0], audioData, context, destination);
            let recording = await getRecording();
            resolve(recording);
        } catch (error) {
            reject(error);
        }

    });

}

const getRecording = () => {
    return new Promise(resolve => {
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