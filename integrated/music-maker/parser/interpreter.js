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
        return val;
    } catch(e) {
        console.log("Syntax Error: Missing crucial values");
    }

}


export default dsl;

