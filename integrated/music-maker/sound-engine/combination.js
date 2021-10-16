/* 
    Sound Executtion System
*/

const player = {};

player.render = async(combination, audioData) => {

    return new Promise(async(resolve, reject) => {

        // Iterate tracks
        console.log(combination)
        for (let track of combination.tracks) {
            
            let offset = track.offset;
            let volume = track.volume;
            let limit = track.maxLength;

            for (let component of track.components) {

                let audio = audioData.get(component.name);
                if (audio.type == 'buffer') {

                    const context = new AudioContext();
                    const play = context.createBufferSource();
                    play.buffer = audio.buffer;
                    play.connect(context.destination);
                    play.start(context.currentTime + 0.25);
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