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

    let lexer = new Lexer(chars);
    let tokens  = new CommonTokenStream(lexer);
    let parser = new Parser(tokens);

    parser.buildParseTrees = true;

    let tree = parser.program();
    let visitor = new Visitor();

    let val = parser.accept(visitor);
    console.table(val);

    res.code(200);
    res.send({msg: 'Up and running!'});

}

module.exports = contactController;