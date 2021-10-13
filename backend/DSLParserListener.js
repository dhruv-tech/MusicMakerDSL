// Generated from DSLParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DSLParser.
function DSLParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DSLParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DSLParserListener.prototype.constructor = DSLParserListener;

// Enter a parse tree produced by DSLParser#program.
DSLParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by DSLParser#program.
DSLParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by DSLParser#sound.
DSLParserListener.prototype.enterSound = function(ctx) {
};

// Exit a parse tree produced by DSLParser#sound.
DSLParserListener.prototype.exitSound = function(ctx) {
};


// Enter a parse tree produced by DSLParser#combination.
DSLParserListener.prototype.enterCombination = function(ctx) {
};

// Exit a parse tree produced by DSLParser#combination.
DSLParserListener.prototype.exitCombination = function(ctx) {
};


// Enter a parse tree produced by DSLParser#track.
DSLParserListener.prototype.enterTrack = function(ctx) {
};

// Exit a parse tree produced by DSLParser#track.
DSLParserListener.prototype.exitTrack = function(ctx) {
};


// Enter a parse tree produced by DSLParser#pattern.
DSLParserListener.prototype.enterPattern = function(ctx) {
};

// Exit a parse tree produced by DSLParser#pattern.
DSLParserListener.prototype.exitPattern = function(ctx) {
};


// Enter a parse tree produced by DSLParser#repeat.
DSLParserListener.prototype.enterRepeat = function(ctx) {
};

// Exit a parse tree produced by DSLParser#repeat.
DSLParserListener.prototype.exitRepeat = function(ctx) {
};


// Enter a parse tree produced by DSLParser#usesound.
DSLParserListener.prototype.enterUsesound = function(ctx) {
};

// Exit a parse tree produced by DSLParser#usesound.
DSLParserListener.prototype.exitUsesound = function(ctx) {
};


// Enter a parse tree produced by DSLParser#volume.
DSLParserListener.prototype.enterVolume = function(ctx) {
};

// Exit a parse tree produced by DSLParser#volume.
DSLParserListener.prototype.exitVolume = function(ctx) {
};


// Enter a parse tree produced by DSLParser#maxlength.
DSLParserListener.prototype.enterMaxlength = function(ctx) {
};

// Exit a parse tree produced by DSLParser#maxlength.
DSLParserListener.prototype.exitMaxlength = function(ctx) {
};


// Enter a parse tree produced by DSLParser#offset.
DSLParserListener.prototype.enterOffset = function(ctx) {
};

// Exit a parse tree produced by DSLParser#offset.
DSLParserListener.prototype.exitOffset = function(ctx) {
};


// Enter a parse tree produced by DSLParser#components.
DSLParserListener.prototype.enterComponents = function(ctx) {
};

// Exit a parse tree produced by DSLParser#components.
DSLParserListener.prototype.exitComponents = function(ctx) {
};


// Enter a parse tree produced by DSLParser#component.
DSLParserListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by DSLParser#component.
DSLParserListener.prototype.exitComponent = function(ctx) {
};



exports.DSLParserListener = DSLParserListener;