// Generated from DSLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DSLParserListener from './DSLParserListener.js';
import DSLParserVisitor from './DSLParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001b\u0089\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e",
    "\u0002\u001d\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*",
    "\u000b\u0003\u0003\u0003\u0007\u0003-\n\u0003\f\u0003\u000e\u00030\u000b",
    "\u0003\u0003\u0003\u0007\u00033\n\u0003\f\u0003\u000e\u00036\u000b\u0003",
    "\u0003\u0003\u0007\u00039\n\u0003\f\u0003\u000e\u0003<\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004C",
    "\n\u0004\r\u0004\u000e\u0004D\u0003\u0005\u0003\u0005\u0007\u0005I\n",
    "\u0005\f\u0005\u000e\u0005L\u000b\u0005\u0003\u0005\u0007\u0005O\n\u0005",
    "\f\u0005\u000e\u0005R\u000b\u0005\u0003\u0005\u0007\u0005U\n\u0005\f",
    "\u0005\u000e\u0005X\u000b\u0005\u0003\u0005\u0007\u0005[\n\u0005\f\u0005",
    "\u000e\u0005^\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0006\bj\n\b\r\b\u000e\bk\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0006\f{\n\f\r\f\u000e\f|\u0003\f\u0003\f\u0003\r\u0007\r\u0082",
    "\n\r\f\r\u000e\r\u0085\u000b\r\u0003\r\u0003\r\u0003\r\u0002\u0002\u000e",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0003",
    "\u0003\u0002\u0004\u0005\u0002\u0089\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0004\"\u0003\u0002\u0002\u0002\u0006?\u0003\u0002\u0002\u0002\bF\u0003",
    "\u0002\u0002\u0002\na\u0003\u0002\u0002\u0002\fd\u0003\u0002\u0002\u0002",
    "\u000eg\u0003\u0002\u0002\u0002\u0010o\u0003\u0002\u0002\u0002\u0012",
    "r\u0003\u0002\u0002\u0002\u0014u\u0003\u0002\u0002\u0002\u0016x\u0003",
    "\u0002\u0002\u0002\u0018\u0083\u0003\u0002\u0002\u0002\u001a\u001c\u0005",
    "\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003",
    "\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f \u0005",
    "\u0006\u0004\u0002 !\u0007\n\u0002\u0002!\u0003\u0003\u0002\u0002\u0002",
    "\"#\u0007\u0003\u0002\u0002#$\u0007\u0014\u0002\u0002$(\t\u0002\u0002",
    "\u0002%\'\u0005\n\u0006\u0002&%\u0003\u0002\u0002\u0002\'*\u0003\u0002",
    "\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002).\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002+-\u0005\f\u0007\u0002,",
    "+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/4\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000213\u0005\u000e\b\u000221\u0003\u0002\u0002\u000236\u0003",
    "\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5:\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000279\u0005\u0010\t",
    "\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;=\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002=>\u0007\u0006\u0002\u0002>\u0005\u0003\u0002\u0002",
    "\u0002?@\u0007\u0007\u0002\u0002@B\u0007\u0014\u0002\u0002AC\u0005\b",
    "\u0005\u0002BA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DB\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002E\u0007\u0003\u0002\u0002",
    "\u0002FJ\u0007\b\u0002\u0002GI\u0005\u0012\n\u0002HG\u0003\u0002\u0002",
    "\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002",
    "\u0002\u0002KP\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MO\u0005",
    "\u0014\u000b\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002",
    "PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QV\u0003\u0002\u0002",
    "\u0002RP\u0003\u0002\u0002\u0002SU\u0005\u0010\t\u0002TS\u0003\u0002",
    "\u0002\u0002UX\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002VW\u0003",
    "\u0002\u0002\u0002W\\\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002",
    "Y[\u0005\u0016\f\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002",
    "\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_`\u0007\t\u0002\u0002",
    "`\t\u0003\u0002\u0002\u0002ab\u0007\u000b\u0002\u0002bc\u0007\u0014",
    "\u0002\u0002c\u000b\u0003\u0002\u0002\u0002de\u0007\f\u0002\u0002ef",
    "\u0007\u0013\u0002\u0002f\r\u0003\u0002\u0002\u0002gi\u0007\r\u0002",
    "\u0002hj\u0007\u001a\u0002\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002",
    "\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0003",
    "\u0002\u0002\u0002mn\u0007\u001b\u0002\u0002n\u000f\u0003\u0002\u0002",
    "\u0002op\u0007\u000e\u0002\u0002pq\u0007\u0013\u0002\u0002q\u0011\u0003",
    "\u0002\u0002\u0002rs\u0007\u0010\u0002\u0002st\u0007\u0013\u0002\u0002",
    "t\u0013\u0003\u0002\u0002\u0002uv\u0007\u000f\u0002\u0002vw\u0007\u0013",
    "\u0002\u0002w\u0015\u0003\u0002\u0002\u0002xz\u0007\u0011\u0002\u0002",
    "y{\u0005\u0018\r\u0002zy\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u007f\u0007\u0018\u0002\u0002\u007f\u0017\u0003\u0002",
    "\u0002\u0002\u0080\u0082\u0007\u0015\u0002\u0002\u0081\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0086\u0003\u0002",
    "\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u0017",
    "\u0002\u0002\u0087\u0019\u0003\u0002\u0002\u0002\u000f\u001d(.4:DJP",
    "V\\k|\u0083"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DSLParser extends antlr4.Parser {

    static grammarFileName = "DSLParser.g4";
    static literalNames = [ null, null, "'as Preset'", "'as Clip'", "'EndSound'", 
                            null, "'Track'", "'EndTrack'", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'*'", null, "']'", null, null, "'\"'" ];
    static symbolicNames = [ null, "SOUND_START", "PRESET", "CLIP", "SOUND_END", 
                             "COMBINATION_START", "TRACK_START", "TRACK_END", 
                             "PLAY", "PATTERN_START", "REPEAT_START", "USESOUND_START", 
                             "VOLUME_START", "OFFSET_START", "MAXLENGTH_START", 
                             "COMPONENTS_START", "WS", "NUM", "TEXT", "COMPONENT_REPEAT", 
                             "MULTIPLY", "COMPONENT_NAME", "COMPONENTS_END", 
                             "COMMA", "USESOUNDS", "USESOUNDS_END" ];
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
	        _la = this._input.LA(1);
	        if(!(_la===DSLParser.PRESET || _la===DSLParser.CLIP)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.PATTERN_START) {
	            this.state = 35;
	            this.pattern();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.REPEAT_START) {
	            this.state = 41;
	            this.repeat();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.USESOUND_START) {
	            this.state = 47;
	            this.usesound();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.VOLUME_START) {
	            this.state = 53;
	            this.volume();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
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
	        this.state = 61;
	        this.match(DSLParser.COMBINATION_START);
	        this.state = 62;
	        this.match(DSLParser.TEXT);
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this.track();
	            this.state = 66; 
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
	        this.state = 68;
	        this.match(DSLParser.TRACK_START);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.MAXLENGTH_START) {
	            this.state = 69;
	            this.maxlength();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.OFFSET_START) {
	            this.state = 75;
	            this.offset();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.VOLUME_START) {
	            this.state = 81;
	            this.volume();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.COMPONENTS_START) {
	            this.state = 87;
	            this.components();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
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
	        this.state = 95;
	        this.match(DSLParser.PATTERN_START);
	        this.state = 96;
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
	        this.state = 98;
	        this.match(DSLParser.REPEAT_START);
	        this.state = 99;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(DSLParser.USESOUND_START);
	        this.state = 103; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 102;
	            this.match(DSLParser.USESOUNDS);
	            this.state = 105; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.USESOUNDS);
	        this.state = 107;
	        this.match(DSLParser.USESOUNDS_END);
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
	        this.state = 109;
	        this.match(DSLParser.VOLUME_START);
	        this.state = 110;
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
	        this.state = 112;
	        this.match(DSLParser.MAXLENGTH_START);
	        this.state = 113;
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
	        this.state = 115;
	        this.match(DSLParser.OFFSET_START);
	        this.state = 116;
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
	        this.state = 118;
	        this.match(DSLParser.COMPONENTS_START);
	        this.state = 120; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 119;
	            this.component();
	            this.state = 122; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.COMPONENT_REPEAT || _la===DSLParser.COMPONENT_NAME);
	        this.state = 124;
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
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.COMPONENT_REPEAT) {
	            this.state = 126;
	            this.match(DSLParser.COMPONENT_REPEAT);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
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
DSLParser.PRESET = 2;
DSLParser.CLIP = 3;
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
DSLParser.USESOUNDS = 24;
DSLParser.USESOUNDS_END = 25;

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitProgram(this);
		}
	}

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

	SOUND_END() {
	    return this.getToken(DSLParser.SOUND_END, 0);
	};

	PRESET() {
	    return this.getToken(DSLParser.PRESET, 0);
	};

	CLIP() {
	    return this.getToken(DSLParser.CLIP, 0);
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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterSound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitSound(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterCombination(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitCombination(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterTrack(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitTrack(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitPattern(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterRepeat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitRepeat(this);
		}
	}

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

	USESOUNDS_END() {
	    return this.getToken(DSLParser.USESOUNDS_END, 0);
	};

	USESOUNDS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DSLParser.USESOUNDS);
	    } else {
	        return this.getToken(DSLParser.USESOUNDS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterUsesound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitUsesound(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterVolume(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitVolume(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterMaxlength(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitMaxlength(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterOffset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitOffset(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterComponents(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitComponents(this);
		}
	}

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


	enterRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.enterComponent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLParserListener ) {
	        listener.exitComponent(this);
		}
	}

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
