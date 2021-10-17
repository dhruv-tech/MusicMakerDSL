/* 
    Interpreter gateway
*/

const dsl = {};

import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;

import Lexer from './DSLLexer.js';
import Parser from './DSLParser';
import Visitor from './DSLParserVisitor.js';

dsl.interpret = (input) => {
    
    let chars = new InputStream(input, true)
    let lexer = new Lexer(chars);
    let tokens  = new CommonTokenStream(lexer);
    let parser = new Parser(tokens);

    parser.buildParseTrees = true;

    let tree = parser.program();
    let visitor = new Visitor();

    let val = tree.accept(visitor);
    console.log(val);
    return val;

}


export default dsl;

