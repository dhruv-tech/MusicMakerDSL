/*
    Team 24, Music Maker DSL Interpreter
*/

const contactController = {};
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import Lexer from '../parser/DSLLexer.js';
import Parser from '../parser/DSLParser.js';
import Visitor from '../parser/DSLParserVisitor.js';
import soundEngine from '../sound-engine/engine.js';
import combination from '../sound-engine/combination.js';

contactController.helloWorld = async(req, res) => {

//     let input = `Sound Kick1 as Preset
// 	Pattern: x-xx-x
//   Repeat: 10
// 	UseSound: "Kick"
// 	Volume: 10
// EndSound`;
//     let chars = new InputStream(input, true)
//     let lexer = new Lexer(chars);
//     let tokens  = new CommonTokenStream(lexer);
//     let parser = new Parser(tokens);

//     parser.buildParseTrees = true;

//     let tree = parser.program();
//     let visitor = new Visitor();

//     let val = tree.accept(visitor);
//     //console.log(val);

    // let testInput = [
    //     {
    //         type: 'Sound',
    //         subtype: 'Preset',
    //         name: 'Kick1',
    //         pattern: 'x-xx-x',
    //         repeat: 10,
    //         usesound: 'kick',
    //         volume: 10
    //     },
    //     {
    //         type: 'Sound',
    //         subtype: 'Preset',
    //         name: 'Kick1',
    //         pattern: 'x-xx-x',
    //         repeat: 10,
    //         usesound: 'kick',
    //         volume: 10
    //     },
    //     {
    //         error: `'x' is not specified`
    //     }
    // ]

    let testCombination = {
        type: 'combination',
        name: 'Draft1',
        tracks: [
            {
                maxLength: 50,
                volume: 10,
                components: [
                    {
                        repeat: 5,
                        name: "Kick1"
                    },
                    {
                        repeat: 5,
                        name: "Melody1"
                    }
                ]
            },
            {
                maxLength: 35,
                offset: 10,
                volume: 5,
                components: [
                    {
                        repeat: 15,
                        name: "Kick1"
                    },
                    {
                        repeat: 6,
                        name: "Melody1"
                    }
                ]
            }
        ]
    }

    let comArr = [
      testCombination,
      testCombination
    ]

    // soundEngine.build(testInput);
    combination.build(comArr, [])
    res.code(200);
    res.send({msg: 'Up and running!'});

}
export default contactController;