// Generated from DSLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DSLParserVisitor from './DSLParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0019\u0085\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e",
    "\u0002\u001d\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003(\n\u0003\f\u0003\u000e",
    "\u0003+\u000b\u0003\u0003\u0003\u0007\u0003.\n\u0003\f\u0003\u000e\u0003",
    "1\u000b\u0003\u0003\u0003\u0007\u00034\n\u0003\f\u0003\u000e\u00037",
    "\u000b\u0003\u0003\u0003\u0007\u0003:\n\u0003\f\u0003\u000e\u0003=\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0006",
    "\u0004D\n\u0004\r\u0004\u000e\u0004E\u0003\u0005\u0003\u0005\u0007\u0005",
    "J\n\u0005\f\u0005\u000e\u0005M\u000b\u0005\u0003\u0005\u0007\u0005P",
    "\n\u0005\f\u0005\u000e\u0005S\u000b\u0005\u0003\u0005\u0007\u0005V\n",
    "\u0005\f\u0005\u000e\u0005Y\u000b\u0005\u0003\u0005\u0007\u0005\\\n",
    "\u0005\f\u0005\u000e\u0005_\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0006\fw\n\f\r\f\u000e",
    "\fx\u0003\f\u0003\f\u0003\r\u0007\r~\n\r\f\r\u000e\r\u0081\u000b\r\u0003",
    "\r\u0003\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u0002\u0002\u0002\u0084\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006@\u0003\u0002\u0002",
    "\u0002\bG\u0003\u0002\u0002\u0002\nb\u0003\u0002\u0002\u0002\fe\u0003",
    "\u0002\u0002\u0002\u000eh\u0003\u0002\u0002\u0002\u0010k\u0003\u0002",
    "\u0002\u0002\u0012n\u0003\u0002\u0002\u0002\u0014q\u0003\u0002\u0002",
    "\u0002\u0016t\u0003\u0002\u0002\u0002\u0018\u007f\u0003\u0002\u0002",
    "\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002",
    "\u0002\u001f \u0005\u0006\u0004\u0002 !\u0007\n\u0002\u0002!\u0003\u0003",
    "\u0002\u0002\u0002\"#\u0007\u0003\u0002\u0002#$\u0007\u0014\u0002\u0002",
    "$%\u0007\u0004\u0002\u0002%)\u0007\u0005\u0002\u0002&(\u0005\n\u0006",
    "\u0002\'&\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*/\u0003\u0002\u0002\u0002",
    "+)\u0003\u0002\u0002\u0002,.\u0005\f\u0007\u0002-,\u0003\u0002\u0002",
    "\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u000205\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000224\u0005",
    "\u000e\b\u000232\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u00025",
    "3\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026;\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u00028:\u0005\u0010\t\u000298\u0003\u0002",
    "\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    ">?\u0007\u0006\u0002\u0002?\u0005\u0003\u0002\u0002\u0002@A\u0007\u0007",
    "\u0002\u0002AC\u0007\u0014\u0002\u0002BD\u0005\b\u0005\u0002CB\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002",
    "EF\u0003\u0002\u0002\u0002F\u0007\u0003\u0002\u0002\u0002GK\u0007\b",
    "\u0002\u0002HJ\u0005\u0012\n\u0002IH\u0003\u0002\u0002\u0002JM\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002",
    "LQ\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002NP\u0005\u0014\u000b",
    "\u0002ON\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002QR\u0003\u0002\u0002\u0002RW\u0003\u0002\u0002\u0002SQ\u0003",
    "\u0002\u0002\u0002TV\u0005\u0010\t\u0002UT\u0003\u0002\u0002\u0002V",
    "Y\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002",
    "\u0002X]\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z\\\u0005",
    "\u0016\f\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003\u0002\u0002",
    "\u0002_]\u0003\u0002\u0002\u0002`a\u0007\t\u0002\u0002a\t\u0003\u0002",
    "\u0002\u0002bc\u0007\u000b\u0002\u0002cd\u0007\u0014\u0002\u0002d\u000b",
    "\u0003\u0002\u0002\u0002ef\u0007\f\u0002\u0002fg\u0007\u0013\u0002\u0002",
    "g\r\u0003\u0002\u0002\u0002hi\u0007\r\u0002\u0002ij\u0007\u0014\u0002",
    "\u0002j\u000f\u0003\u0002\u0002\u0002kl\u0007\u000e\u0002\u0002lm\u0007",
    "\u0013\u0002\u0002m\u0011\u0003\u0002\u0002\u0002no\u0007\u0010\u0002",
    "\u0002op\u0007\u0013\u0002\u0002p\u0013\u0003\u0002\u0002\u0002qr\u0007",
    "\u000f\u0002\u0002rs\u0007\u0013\u0002\u0002s\u0015\u0003\u0002\u0002",
    "\u0002tv\u0007\u0011\u0002\u0002uw\u0005\u0018\r\u0002vu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z{\u0007\u0018\u0002\u0002",
    "{\u0017\u0003\u0002\u0002\u0002|~\u0007\u0015\u0002\u0002}|\u0003\u0002",
    "\u0002\u0002~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0082\u0003\u0002\u0002",
    "\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0017\u0002",
    "\u0002\u0083\u0019\u0003\u0002\u0002\u0002\u000e\u001d)/5;EKQW]x\u007f"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DSLParser extends antlr4.Parser {

    static grammarFileName = "DSLParser.g4";
    static literalNames = [ null, null, "'as '", null, "'EndSound'", null, 
                            "'Track'", "'EndTrack'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'*'", null, "']'" ];
    static symbolicNames = [ null, "SOUND_START", "AS", "SUBTYPE", "SOUND_END", 
                             "COMBINATION_START", "TRACK_START", "TRACK_END", 
                             "PLAY", "PATTERN_START", "REPEAT_START", "USESOUND_START", 
                             "VOLUME_START", "OFFSET_START", "MAXLENGTH_START", 
                             "COMPONENTS_START", "WS", "NUM", "TEXT", "COMPONENT_REPEAT", 
                             "MULTIPLY", "COMPONENT_NAME", "COMPONENTS_END", 
                             "COMMA" ];
    static ruleNames = [ "program", "sound", "combination", "track", "pattern", 
                         "repeat", "usesound", "volume", "maxlength", "offset", 
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
	        this.state = 29;
	        this.combination();
	        this.state = 30;
	        this.match(DSLParser.PLAY);
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
	    this.enterRule(localctx, 2, DSLParser.RULE_sound);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(DSLParser.SOUND_START);
	        this.state = 33;
	        this.match(DSLParser.TEXT);
	        this.state = 34;
	        this.match(DSLParser.AS);
	        this.state = 35;
	        this.match(DSLParser.SUBTYPE);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.PATTERN_START) {
	            this.state = 36;
	            this.pattern();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.REPEAT_START) {
	            this.state = 42;
	            this.repeat();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.USESOUND_START) {
	            this.state = 48;
	            this.usesound();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.VOLUME_START) {
	            this.state = 54;
	            this.volume();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
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
	    this.enterRule(localctx, 4, DSLParser.RULE_combination);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(DSLParser.COMBINATION_START);
	        this.state = 63;
	        this.match(DSLParser.TEXT);
	        this.state = 65; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 64;
	            this.track();
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.TRACK_START);
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
	    this.enterRule(localctx, 6, DSLParser.RULE_track);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(DSLParser.TRACK_START);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.MAXLENGTH_START) {
	            this.state = 70;
	            this.maxlength();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.OFFSET_START) {
	            this.state = 76;
	            this.offset();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.VOLUME_START) {
	            this.state = 82;
	            this.volume();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.COMPONENTS_START) {
	            this.state = 88;
	            this.components();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
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
	    this.enterRule(localctx, 8, DSLParser.RULE_pattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(DSLParser.PATTERN_START);
	        this.state = 97;
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
	    this.enterRule(localctx, 10, DSLParser.RULE_repeat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(DSLParser.REPEAT_START);
	        this.state = 100;
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
	    this.enterRule(localctx, 12, DSLParser.RULE_usesound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(DSLParser.USESOUND_START);
	        this.state = 103;
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



	volume() {
	    let localctx = new VolumeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DSLParser.RULE_volume);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(DSLParser.VOLUME_START);
	        this.state = 106;
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



	maxlength() {
	    let localctx = new MaxlengthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DSLParser.RULE_maxlength);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(DSLParser.MAXLENGTH_START);
	        this.state = 109;
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
	        this.state = 111;
	        this.match(DSLParser.OFFSET_START);
	        this.state = 112;
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
	        this.state = 114;
	        this.match(DSLParser.COMPONENTS_START);
	        this.state = 116; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 115;
	            this.component();
	            this.state = 118; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.COMPONENT_REPEAT || _la===DSLParser.COMPONENT_NAME);
	        this.state = 120;
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.COMPONENT_REPEAT) {
	            this.state = 122;
	            this.match(DSLParser.COMPONENT_REPEAT);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
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
DSLParser.TRACK_START = 6;
DSLParser.TRACK_END = 7;
DSLParser.PLAY = 8;
DSLParser.PATTERN_START = 9;
DSLParser.REPEAT_START = 10;
DSLParser.USESOUND_START = 11;
DSLParser.VOLUME_START = 12;
DSLParser.OFFSET_START = 13;
DSLParser.MAXLENGTH_START = 14;
DSLParser.COMPONENTS_START = 15;
DSLParser.WS = 16;
DSLParser.NUM = 17;
DSLParser.TEXT = 18;
DSLParser.COMPONENT_REPEAT = 19;
DSLParser.MULTIPLY = 20;
DSLParser.COMPONENT_NAME = 21;
DSLParser.COMPONENTS_END = 22;
DSLParser.COMMA = 23;

DSLParser.RULE_program = 0;
DSLParser.RULE_sound = 1;
DSLParser.RULE_combination = 2;
DSLParser.RULE_track = 3;
DSLParser.RULE_pattern = 4;
DSLParser.RULE_repeat = 5;
DSLParser.RULE_usesound = 6;
DSLParser.RULE_volume = 7;
DSLParser.RULE_maxlength = 8;
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

	combination() {
	    return this.getTypedRuleContext(CombinationContext,0);
	};

	PLAY() {
	    return this.getToken(DSLParser.PLAY, 0);
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

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitProgram(this);
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

	maxlength = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MaxlengthContext);
	    } else {
	        return this.getTypedRuleContext(MaxlengthContext,i);
	    }
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

	TEXT() {
	    return this.getToken(DSLParser.TEXT, 0);
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



class MaxlengthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_maxlength;
    }

	MAXLENGTH_START() {
	    return this.getToken(DSLParser.MAXLENGTH_START, 0);
	};

	NUM() {
	    return this.getToken(DSLParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLParserVisitor ) {
	        return visitor.visitMaxlength(this);
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

	COMPONENT_REPEAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DSLParser.COMPONENT_REPEAT);
	    } else {
	        return this.getToken(DSLParser.COMPONENT_REPEAT, i);
	    }
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
DSLParser.SoundContext = SoundContext; 
DSLParser.CombinationContext = CombinationContext; 
DSLParser.TrackContext = TrackContext; 
DSLParser.PatternContext = PatternContext; 
DSLParser.RepeatContext = RepeatContext; 
DSLParser.UsesoundContext = UsesoundContext; 
DSLParser.VolumeContext = VolumeContext; 
DSLParser.MaxlengthContext = MaxlengthContext; 
DSLParser.OffsetContext = OffsetContext; 
DSLParser.ComponentsContext = ComponentsContext; 
DSLParser.ComponentContext = ComponentContext; 
