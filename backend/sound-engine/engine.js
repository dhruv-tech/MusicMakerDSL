/*
    Sound engine entrypoint
*/

const engine = {};

engine.build = (specs) => {

    // Validate
    
    for (let spec of specs) {

        let firstKey = Object.keys(spec)[0];
        if (firstKey == 'error') {
            console.log('error');
        }

    }

    // Process Sounds
    // Process Combination

}

export default engine;