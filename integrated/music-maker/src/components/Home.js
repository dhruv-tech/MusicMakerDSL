
import dsl from '../../parser/interpreter.js';
import soundEngine from '../../sound-engine/engine.js';
import { Modal } from 'bootstrap';

export default {
    name: 'Home',
    props: {
      msg: String
    },
    methods:{
        test: async() => {


            let input = `Sound Kick1 as Preset
            	Pattern: x-xx-x
                Repeat: 10
            	UseSound: "Kick"
            	Volume: 10
            EndSound`;
            let check = dsl.interpret(input);

            let testInput = [
                {
                    type: 'Sound',
                    subtype: 'Preset',
                    name: 'Kick1',
                    pattern: 'x-',
                    repeat: 1,
                    usesound: 'Kick',
                    volume: 10
                },
                {
                    type: 'Sound',
                    subtype: 'Preset',
                    name: 'Bass1',
                    pattern: 'x-',
                    repeat: 1,
                    usesound: 'Bass',
                    volume: 10
                },
                {
                    type: 'Combination',
                    name: 'Draft1',
                    tracks: [
                        {
                            maxLength: 25,
                            offset: 2,
                            volume: 100,
                            components: [
                                {
                                    repeat: 4,
                                    name: "Kick1"
                                },
                                {
                                    repeat: 5,
                                    name: "Bass1"
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
    },
    data: () => ({
        modal: null
    }),
    mounted() {
        this.modal = new Modal(this.$refs.docsModal)
    },
}