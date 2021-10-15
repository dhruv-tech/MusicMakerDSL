/*
    Sound engine entrypoint
*/

import soundBuilder from "./sound.js";
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

        let soundIds = [];
        for (let sound of sounds) {
            let id = await soundBuilder.render(sound);
            //soundIds.append(id);
        }

        // Process Combination
    });

}

export default engine;