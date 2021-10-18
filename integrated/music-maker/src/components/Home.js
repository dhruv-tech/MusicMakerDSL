
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
        recordings: []
    }),
    methods:{
        async runDSL (e) {
            try {
                const parsedDSL = dsl.interpret(this.dslStr);
                if (parsedDSL) {
                    let recording = await soundEngine.build(parsedDSL);
                    this.recordings = [recording].concat(this.recordings);
                } else {
                    alert("Something went wrong while attempting to run your DSL.\nPlease check the console for possible solutions.");
                }
            } catch (error) {
                alert(error?.message || error?.error || error);
            }
            
            
        }
    },
    beforeMount(){
    },
    mounted() {
        this.modal = new Modal(this.$refs.docsModal)
    },
}