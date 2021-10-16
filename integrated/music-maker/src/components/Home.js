
import scribble from 'scribbletune/browser.js';
import soundEngine from '../../sound-engine/engine.js';

export default {
    name: 'Home',
    props: {
      msg: String
    },
    methods:{
        test: async() => {
            let testInput = [
                {
                    type: 'Sound',
                    subtype: 'Preset',
                    name: 'Kick1',
                    pattern: 'xx-xx-',
                    repeat: 2,
                    usesound: 'Kick',
                    volume: 10
                },
                {
                    type: 'Sound',
                    subtype: 'Clip',
                    name: 'Kick2',
                    pattern: '--x--x',
                    repeat: 2,
                    usesound: 'C0 C#2 D5',
                    volume: 10
                },
                {
                    type: 'Combination',
                    name: 'Draft1',
                    tracks: [
                        {
                            maxLength: 50,
                            volume: 10,
                            components: [
                                {
                                    repeat: 5,
                                    name: "Kick1"
                                }
                            ]
                        }
                    ]
                }
            ]

            soundEngine.build(testInput);
        }
    },
    beforeMount(){
    }
}