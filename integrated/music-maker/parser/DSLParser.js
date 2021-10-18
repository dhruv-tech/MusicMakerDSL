// Generated from DSLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DSLParserVisitor from './DSLParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001bi\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e\u0002",
    "\u001d\u0003\u0002\u0006\u0002!\n\u0002\r\u0002\u000e\u0002\"\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u00041\n\u0004\f\u0004\u000e\u00044\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005;\n\u0005\r\u0005\u000e",
    "\u0005<\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006E\n\u0006\f\u0006\u000e\u0006H\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0006\f^\n\f\r\f\u000e",
    "\f_\u0003\f\u0003\f\u0003\r\u0005\re\n\r\u0003\r\u0003\r\u0003\r\u0002",
    "\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u0002\u0002\u0002g\u0002\u001b\u0003\u0002\u0002\u0002\u0004&\u0003",
    "\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b7\u0003\u0002\u0002",
    "\u0002\n@\u0003\u0002\u0002\u0002\fK\u0003\u0002\u0002\u0002\u000eN",
    "\u0003\u0002\u0002\u0002\u0010Q\u0003\u0002\u0002\u0002\u0012U\u0003",
    "\u0002\u0002\u0002\u0014X\u0003\u0002\u0002\u0002\u0016[\u0003\u0002",
    "\u0002\u0002\u0018d\u0003\u0002\u0002\u0002\u001a\u001c\u0005\u0006",
    "\u0004\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002",
    "\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e \u0003\u0002\u0002\u0002\u001f!\u0005\b\u0005\u0002",
    " \u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003",
    "\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002",
    "$%\u0005\u0004\u0003\u0002%\u0003\u0003\u0002\u0002\u0002&\'\u0007\u000b",
    "\u0002\u0002\'(\u0007\u0014\u0002\u0002(\u0005\u0003\u0002\u0002\u0002",
    ")*\u0007\u0003\u0002\u0002*+\u0007\u0014\u0002\u0002+,\u0007\u0004\u0002",
    "\u0002,2\u0007\u0005\u0002\u0002-1\u0005\f\u0007\u0002.1\u0005\u000e",
    "\b\u0002/1\u0005\u0010\t\u00020-\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u00020/\u0003\u0002\u0002\u000214\u0003\u0002\u0002\u000220\u0003",
    "\u0002\u0002\u000223\u0003\u0002\u0002\u000235\u0003\u0002\u0002\u0002",
    "42\u0003\u0002\u0002\u000256\u0007\u0006\u0002\u00026\u0007\u0003\u0002",
    "\u0002\u000278\u0007\u0007\u0002\u00028:\u0007\u0014\u0002\u00029;\u0005",
    "\n\u0006\u0002:9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<",
    ":\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002",
    "\u0002>?\u0007\b\u0002\u0002?\t\u0003\u0002\u0002\u0002@F\u0007\t\u0002",
    "\u0002AE\u0005\u0014\u000b\u0002BE\u0005\u0012\n\u0002CE\u0005\u0016",
    "\f\u0002DA\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DC\u0003",
    "\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002",
    "FG\u0003\u0002\u0002\u0002GI\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002",
    "\u0002IJ\u0007\n\u0002\u0002J\u000b\u0003\u0002\u0002\u0002KL\u0007",
    "\f\u0002\u0002LM\u0007\u0014\u0002\u0002M\r\u0003\u0002\u0002\u0002",
    "NO\u0007\r\u0002\u0002OP\u0007\u0013\u0002\u0002P\u000f\u0003\u0002",
    "\u0002\u0002QR\u0007\u000e\u0002\u0002RS\u0007\u001a\u0002\u0002ST\u0007",
    "\u001b\u0002\u0002T\u0011\u0003\u0002\u0002\u0002UV\u0007\u000f\u0002",
    "\u0002VW\u0007\u0013\u0002\u0002W\u0013\u0003\u0002\u0002\u0002XY\u0007",
    "\u0010\u0002\u0002YZ\u0007\u0013\u0002\u0002Z\u0015\u0003\u0002\u0002",
    "\u0002[]\u0007\u0011\u0002\u0002\\^\u0005\u0018\r\u0002]\\\u0003\u0002",
    "\u0002\u0002^_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003",
    "\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0007\u0018\u0002\u0002",
    "b\u0017\u0003\u0002\u0002\u0002ce\u0007\u0016\u0002\u0002dc\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0007",
    "\u0017\u0002\u0002g\u0019\u0003\u0002\u0002\u0002\u000b\u001d\"02<D",
    "F_d"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DSLParser extends antlr4.Parser {

    static grammarFileName = "DSLParser.g4";
    static literalNames = [ null, null, "'as '", null, "'EndSound'", null, 
                            "'EndCombination'", "'Track'", "'EndTrack'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'*'", null, null, "']'", null, 
                            null, "'\"'" ];
    static symbolicNames = [ null, "SOUND_START", "AS", "SUBTYPE", "SOUND_END", 
                             "COMBINATION_START", "COMBINATION_END", "TRACK_START", 
                             "TRACK_END", "PLAY_START", "PATTERN_START", 
                             "REPEAT_START", "USESOUND_START", "VOLUME_START", 
                             "OFFSET_START", "COMPONENTS_START", "WS", "NUM", 
                             "TEXT", "MULTIPLY", "COMPONENT_REPEAT", "COMPONENT_NAME", 
                             "COMPONENTS_END", "COMMA", "USESOUNDS", "USESOUND_END" ];
    static ruleNames = [ "program", "play", "sound", "combination", "track", 
                         "pattern", "repeat", "usesound", "volume", "offset", 
                         "components", "component" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DSLParser.ruleNames;
        this.literalNames = DSLParser.literalNames;
        this.symbolicNames = DSLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DSLParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.sound();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.SOUND_START);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.combination();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.COMBINATION_START);
	        this.state = 34;
	        this.play();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	play() {
	    let localctx = new PlayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DSLParser.RULE_play);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(DSLParser.PLAY_START);
	        this.state = 37;
	        this.match(DSLParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sound() {
	    let localctx = new SoundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DSLParser.RULE_sound);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(DSLParser.SOUND_START);
	        this.state = 40;
	        this.match(DSLParser.TEXT);
	        this.state = 41;
	        this.match(DSLParser.AS);
	        this.state = 42;
	        this.match(DSLParser.SUBTYPE);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DSLParser.PATTERN_START) | (1 << DSLParser.REPEAT_START) | (1 << DSLParser.USESOUND_START))) !== 0)) {
	            this.state = 46;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case DSLParser.PATTERN_START:
	                this.state = 43;
	                this.pattern();
	                break;
	            case DSLParser.REPEAT_START:
	                this.state = 44;
	                this.repeat();
	                break;
	            case DSLParser.USESOUND_START:
	                this.state = 45;
	                this.usesound();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this.match(DSLParser.SOUND_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	combination() {
	    let localctx = new CombinationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DSLParser.RULE_combination);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(DSLParser.COMBINATION_START);
	        this.state = 54;
	        this.match(DSLParser.TEXT);
	        this.state = 56; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 55;
	            this.track();
	            this.state = 58; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.TRACK_START);
	        this.state = 60;
	        this.match(DSLParser.COMBINATION_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	track() {
	    let localctx = new TrackContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DSLParser.RULE_track);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(DSLParser.TRACK_START);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DSLParser.VOLUME_START) | (1 << DSLParser.OFFSET_START) | (1 << DSLParser.COMPONENTS_START))) !== 0)) {
	            this.state = 66;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case DSLParser.OFFSET_START:
	                this.state = 63;
	                this.offset();
	                break;
	            case DSLParser.VOLUME_START:
	                this.state = 64;
	                this.volume();
	                break;
	            case DSLParser.COMPONENTS_START:
	                this.state = 65;
	                this.components();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this.match(DSLParser.TRACK_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DSLParser.RULE_pattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(DSLParser.PATTERN_START);
	        this.state = 74;
	        this.match(DSLParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeat() {
	    let localctx = new RepeatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DSLParser.RULE_repeat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(DSLParser.REPEAT_START);
	        this.state = 77;
	        this.match(DSLParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usesound() {
	    let localctx = new UsesoundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DSLParser.RULE_usesound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(DSLParser.USESOUND_START);
	        this.state = 80;
	        this.match(DSLParser.USESOUNDS);
	        this.state = 81;
	        this.match(DSLParser.USESOUND_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	volume() {
	    let localctx = new VolumeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DSLParser.RULE_volume);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(DSLParser.VOLUME_START);
	        this.state = 84;
	        this.match(DSLParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	offset() {
	    let localctx = new OffsetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DSLParser.RULE_offset);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(DSLParser.OFFSET_START);
	        this.state = 87;
	        this.match(DSLParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	components() {
	    let localctx = new ComponentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DSLParser.RULE_components);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(DSLParser.COMPONENTS_START);
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 90;
	            this.component();
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.COMPONENT_REPEAT || _la===DSLParser.COMPONENT_NAME);
	        this.state = 95;
	        this.match(DSLParser.COMPONENTS_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	component() {
	    let localctx = new ComponentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DSLParser.RULE_component);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DSLParser.COMPONENT_REPEAT) {
	            this.state = 97;
	            this.match(DSLParser.COMPONENT_REPEAT);
	        }

	        this.state = 100;
	        this.match(DSLParser.COMPONENT_NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DSLParser.EOF = antlr4.Token.EOF;
DSLParser.SOUND_START = 1;
DSLParser.AS = 2;
DSLParser.SUBTYPE = 3;
DSLParser.SOUND_END = 4;
DSLParser.COMBINATION_START = 5;
DSLParser.COMBINATION_END = 6;
DSLParser.TRACK_START = 7;
DSLParser.TRACK_END = 8;
DSLParser.PLAY_START = 9;
DSLParser.PATTERN_START = 10;
DSLParser.REPEAT_START = 11;
DSLParser.USESOUND_START = 12;
DSLParser.VOLUME_START = 13;
DSLParser.OFFSET_START = 14;
DSLParser.COMPONENTS_START = 15;
DSLParser.WS = 16;
DSLParser.NUM = 17;
DSLParser.TEXT = 18;
DSLParser.MULTIPLY = 19;
DSLParser.COMPONENT_REPEAT = 20;
DSLParser.COMPONENT_NAME = 21;
DSLParser.COMPONENTS_END = 22;
DSLParser.COMMA = 23;
DSLParser.USESOUNDS = 24;
DSLParser.USESOUND_END = 25;

DSLParser.RULE_program = 0;
DSLParser.RULE_play = 1;
DSLParser.RULE_sound = 2;
DSLParser.RULE_combination = 3;
DSLParser.RULE_track = 4;
DSLParser.RULE_pattern = 5;
DSLParser.RULE_repeat = 6;
DSLParser.RULE_usesound = 7;
DSLParser.RULE_volume = 8;
DSLParser.RULE_offset = 9;
DSLParser.RULE_components = 10;
DSLParser.RULE_component = 11;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_program;
    }

	play() {
	    return this.getTypedRuleContext(PlayContext,0);
	};

	sound = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SoundContext);
	    } else {
	        return this.getTypedRuleContext(SoundContext,i);
	    }
	};

	combination = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CombinationContext);
	    } else {
	        return this.getTypedRuleContext(CombinationContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PlayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_play;
    }

	PLAY_START() {
	    return this.getToken(DSLParser.PLAY_START, 0);
	};

	TEXT() {
	    return this.getToken(DSLParser.TEXT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitPlay(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SoundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_sound;
    }

	SOUND_START() {
	    return this.getToken(DSLParser.SOUND_START, 0);
	};

	TEXT() {
	    return this.getToken(DSLParser.TEXT, 0);
	};

	AS() {
	    return this.getToken(DSLParser.AS, 0);
	};

	SUBTYPE() {
	    return this.getToken(DSLParser.SUBTYPE, 0);
	};

	SOUND_END() {
	    return this.getToken(DSLParser.SOUND_END, 0);
	};

	pattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternContext);
	    } else {
	        return this.getTypedRuleContext(PatternContext,i);
	    }
	};

	repeat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RepeatContext);
	    } else {
	        return this.getTypedRuleContext(RepeatContext,i);
	    }
	};

	usesound = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsesoundContext);
	    } else {
	        return this.getTypedRuleContext(UsesoundContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitSound(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CombinationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_combination;
    }

	COMBINATION_START() {
	    return this.getToken(DSLParser.COMBINATION_START, 0);
	};

	TEXT() {
	    return this.getToken(DSLParser.TEXT, 0);
	};

	COMBINATION_END() {
	    return this.getToken(DSLParser.COMBINATION_END, 0);
	};

	track = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TrackContext);
	    } else {
	        return this.getTypedRuleContext(TrackContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitCombination(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TrackContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_track;
    }

	TRACK_START() {
	    return this.getToken(DSLParser.TRACK_START, 0);
	};

	TRACK_END() {
	    return this.getToken(DSLParser.TRACK_END, 0);
	};

	offset = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OffsetContext);
	    } else {
	        return this.getTypedRuleContext(OffsetContext,i);
	    }
	};

	volume = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VolumeContext);
	    } else {
	        return this.getTypedRuleContext(VolumeContext,i);
	    }
	};

	components = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComponentsContext);
	    } else {
	        return this.getTypedRuleContext(ComponentsContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitTrack(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_pattern;
    }

	PATTERN_START() {
	    return this.getToken(DSLParser.PATTERN_START, 0);
	};

	TEXT() {
	    return this.getToken(DSLParser.TEXT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitPattern(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_repeat;
    }

	REPEAT_START() {
	    return this.getToken(DSLParser.REPEAT_START, 0);
	};

	NUM() {
	    return this.getToken(DSLParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitRepeat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsesoundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_usesound;
    }

	USESOUND_START() {
	    return this.getToken(DSLParser.USESOUND_START, 0);
	};

	USESOUNDS() {
	    return this.getToken(DSLParser.USESOUNDS, 0);
	};

	USESOUND_END() {
	    return this.getToken(DSLParser.USESOUND_END, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitUsesound(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VolumeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_volume;
    }

	VOLUME_START() {
	    return this.getToken(DSLParser.VOLUME_START, 0);
	};

	NUM() {
	    return this.getToken(DSLParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitVolume(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OffsetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_offset;
    }

	OFFSET_START() {
	    return this.getToken(DSLParser.OFFSET_START, 0);
	};

	NUM() {
	    return this.getToken(DSLParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitOffset(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComponentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_components;
    }

	COMPONENTS_START() {
	    return this.getToken(DSLParser.COMPONENTS_START, 0);
	};

	COMPONENTS_END() {
	    return this.getToken(DSLParser.COMPONENTS_END, 0);
	};

	component = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComponentContext);
	    } else {
	        return this.getTypedRuleContext(ComponentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitComponents(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComponentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_component;
    }

	COMPONENT_NAME() {
	    return this.getToken(DSLParser.COMPONENT_NAME, 0);
	};

	COMPONENT_REPEAT() {
	    return this.getToken(DSLParser.COMPONENT_REPEAT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitComponent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DSLParser.ProgramContext = ProgramContext; 
DSLParser.PlayContext = PlayContext; 
DSLParser.SoundContext = SoundContext; 
DSLParser.CombinationContext = CombinationContext; 
DSLParser.TrackContext = TrackContext; 
DSLParser.PatternContext = PatternContext; 
DSLParser.RepeatContext = RepeatContext; 
DSLParser.UsesoundContext = UsesoundContext; 
DSLParser.VolumeContext = VolumeContext; 
DSLParser.OffsetContext = OffsetContext; 
DSLParser.ComponentsContext = ComponentsContext; 
DSLParser.ComponentContext = ComponentContext; 
