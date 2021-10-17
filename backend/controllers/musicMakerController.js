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
EndSound

Sound Melody1 as Clip
	Pattern: x
    Repeat: 5
	UseSound: "CM Dm FM"
EndSound

Combination Draft1
	Track
		Volume: 10
		Components: [5*Kick1, 5*Melody1]
	EndTrack
	Track
		Offset: 10
		Volume: 5
		Components: [15*Kick1, 6*Melody1]
	EndTrack
EndCombination

Play Draft1`;

    let chars, lexer, tokens, parser, val, tree, visitor;

    try {
        // Tokenization and Parsing
        chars = new InputStream(input, true);
        lexer = new Lexer(chars);
        tokens  = new CommonTokenStream(lexer);
        parser = new Parser(tokens);

        parser.buildParseTrees = true;

    } catch(e) {
        console.log("Syntax Error: Invalid syntax");
    }

    try {
        // ASTVisitor returns an array of objects to be used by sound engine
        tree = parser.program();
        visitor = new Visitor();
        val = tree.accept(visitor);

        console.log(val);
    } catch(e) {
        console.log("Syntax Error: Missing crucial values");
    }

    res.code(200);
    res.send({msg: 'Up and running!'});

}
export default contactController;