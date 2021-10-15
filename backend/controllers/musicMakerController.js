/*
    Team 24, Music Maker DSL Interpreter
*/

const contactController = {};
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import Lexer from '../parser/DSLLexer.js';
import Parser from '../parser/DSLParser.js';
import Visitor from '../parser/DSLParserVisitor.js';

contactController.helloWorld = async(req, res) => {

    let input = 
`Sound Kick1 as Preset
	Pattern: x-xx-x
    Repeat: 10
	UseSound: "Kick"
	Volume: 10
EndSound

Sound Melody1 as Clip
	Pattern: x
    Repeat: 5
	UseSound: "CM Dm FM"
	Volume: 15
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
    let chars = new InputStream(input, true)
    let lexer = new Lexer(chars);
    let tokens  = new CommonTokenStream(lexer);
    let parser = new Parser(tokens);

    parser.buildParseTrees = true;

    let tree = parser.program();
    let visitor = new Visitor();

    let val = tree.accept(visitor);
    console.log(val);

    res.code(200);
    res.send({msg: 'Up and running!'});

}
export default contactController;