// Generated from DSLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by DSLParser.

export default class DSLParserVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by DSLParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#sound.
	visitSound(ctx) {

		// Create a new sound object to return 
		let sound = {
			type: 'Sound',
			subtype: ctx.SUBTYPE().getText(),
			name: ctx.TEXT().getText()
		};

		// Add all sound options to object as key value pairs
		let optionList = this.visitChildren(ctx);
		optionList.forEach(option => {
			Object.assign(sound, option);
		});

	  return sound;
	}


	// Visit a parse tree produced by DSLParser#combination.
	visitCombination(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#track.
	visitTrack(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#pattern.
	visitPattern(ctx) {
	  return { pattern: ctx.TEXT().getText() };
	}


	// Visit a parse tree produced by DSLParser#repeat.
	visitRepeat(ctx) {
	  return { repeat: parseInt(ctx.NUM().getText()) };
	}


	// Visit a parse tree produced by DSLParser#usesound.
	visitUsesound(ctx) {
	  return { usesound: ctx.TEXT().getText().replace(/['"]+/g, '') }; // Regex to remove quotes
	}


	// Visit a parse tree produced by DSLParser#volume.
	visitVolume(ctx) {
	  return { volume: parseInt(ctx.NUM().getText()) };
	}


	// Visit a parse tree produced by DSLParser#maxlength.
	visitMaxlength(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#offset.
	visitOffset(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#components.
	visitComponents(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#component.
	visitComponent(ctx) {
		let component = {
			name: ctx.COMPONENT_NAME().getText(),
			repeat: ctx.COMPONENT_REPEAT().getText()
		}
	  return component;
	}



}