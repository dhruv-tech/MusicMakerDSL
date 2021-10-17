/*
    Sound engine entrypoint
*/

import soundBuilder from "./sound.js";
import combinationPlayer from "./combination.js";
const engine = {};

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
            await combinationPlayer.render(combination[0], audioData);
        } catch (error) {
            reject(error);
        }

    });

}

engine.test = () => {
    alert('c');
}

export default engine;