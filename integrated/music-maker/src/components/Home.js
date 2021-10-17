
import dsl from '../../parser/interpreter.js';
import soundEngine from '../../sound-engine/engine.js';
import { Modal } from 'bootstrap';

export default {
    name: 'Home',
    props: {
      msg: String
    },
    data: () => ({
        modal: null,
        dslStr: '',
        link: '#'
    }),
    methods:{
        async runDSL (e) {
            // console.log("running DSL: ");
            // console.log(this.dslStr);
            try {
                const check = dsl.interpret(this.dslStr);
                if (check) {
                    // console.log("check");
                    // console.log(check)
                    await soundEngine.build(check);
                } else {
                    alert("Something went wrong while attempting to run your DSL.\nPlease check the console for possible solutions.");
                }
            } catch (error) {
                alert(error?.message || error?.error || error);
            }
            
            
        },
        async test() {
            let input = 
            `Sound Kick1 as Preset
                Pattern: x-xx-x
                Repeat: 10
                UseSound: "Kick"
            EndSound

            Sound Melody1 as Clip
                Pattern: x
                Repeat: 5
                UseSound: "CM Dm FM"
            EndSound

            Combination Draft1
                Track
                    MaxLength: 50
                    Volume: 10
                    Components: [5*Kick1, 5*Melody1]
                EndTrack
                Track
                    MaxLength: 35
                    Offset: 10
                    Volume: 5
                    Components: [15*Kick1, 6*Melody1]
                EndTrack
            EndCombination

            Play Draft1`;
            
            let check = dsl.interpret(input);

            let testInput = [
                {
                    type: 'Sound',
                    subtype: 'Preset',
                    name: 'Kick1',
                    pattern: 'x',
                    repeat: 1,
                    usesound: 'Kick'
                },
                {
                    type: 'Sound',
                    subtype: 'Preset',
                    name: 'Bass1',
                    pattern: 'x-',
                    repeat: 1,
                    usesound: 'Bass'
                },
                {
                    type: 'Sound',
                    subtype: 'Clip',
                    name: 'T1',
                    pattern: 'x',
                    repeat: 1,
                    usesound: 'C1 C2 C3 D5'
                },
                {
                    type: 'Combination',
                    name: 'Draft1',
                    tracks: [
                        {
                            offset: 0,
                            volume: 20,
                            components: [
                                {
                                    repeat: 1,
                                    name: "T1"
                                }
                            ]
                        }
                    ]
                }
            ]

            let uri = await soundEngine.build(testInput);
            alert(uri);
            this.link = uri;
        }
    },
    beforeMount(){
    },
    mounted() {
        this.modal = new Modal(this.$refs.docsModal)
    },
}