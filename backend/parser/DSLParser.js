// Generated from DSLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DSLParserVisitor from './DSLParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001b\u008a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0006\u0002\u001e",
    "\n\u0002\r\u0002\u000e\u0002\u001f\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004-\n\u0004\f\u0004\u000e\u00040\u000b",
    "\u0004\u0003\u0004\u0007\u00043\n\u0004\f\u0004\u000e\u00046\u000b\u0004",
    "\u0003\u0004\u0007\u00049\n\u0004\f\u0004\u000e\u0004<\u000b\u0004\u0003",
    "\u0004\u0007\u0004?\n\u0004\f\u0004\u000e\u0004B\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005I\n\u0005",
    "\r\u0005\u000e\u0005J\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0007\u0006Q\n\u0006\f\u0006\u000e\u0006T\u000b\u0006\u0003\u0006\u0007",
    "\u0006W\n\u0006\f\u0006\u000e\u0006Z\u000b\u0006\u0003\u0006\u0007\u0006",
    "]\n\u0006\f\u0006\u000e\u0006`\u000b\u0006\u0003\u0006\u0007\u0006c",
    "\n\u0006\f\u0006\u000e\u0006f\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0006\r\u007f\n\r\r\r",
    "\u000e\r\u0080\u0003\r\u0003\r\u0003\u000e\u0005\u000e\u0086\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0002\u000f\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0002\u0002\u0088",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002",
    "\u0006\'\u0003\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002\nN\u0003",
    "\u0002\u0002\u0002\fi\u0003\u0002\u0002\u0002\u000el\u0003\u0002\u0002",
    "\u0002\u0010o\u0003\u0002\u0002\u0002\u0012s\u0003\u0002\u0002\u0002",
    "\u0014v\u0003\u0002\u0002\u0002\u0016y\u0003\u0002\u0002\u0002\u0018",
    "|\u0003\u0002\u0002\u0002\u001a\u0085\u0003\u0002\u0002\u0002\u001c",
    "\u001e\u0005\u0006\u0004\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f",
    " \u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0005\b\u0005",
    "\u0002\"#\u0005\u0004\u0003\u0002#\u0003\u0003\u0002\u0002\u0002$%\u0007",
    "\u000b\u0002\u0002%&\u0007\u0015\u0002\u0002&\u0005\u0003\u0002\u0002",
    "\u0002\'(\u0007\u0003\u0002\u0002()\u0007\u0015\u0002\u0002)*\u0007",
    "\u0004\u0002\u0002*.\u0007\u0005\u0002\u0002+-\u0005\f\u0007\u0002,",
    "+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/4\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000213\u0005\u000e\b\u000221\u0003\u0002\u0002\u000236\u0003",
    "\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5:\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000279\u0005\u0010\t",
    "\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;@\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002=?\u0005\u0012\n\u0002>=\u0003\u0002\u0002\u0002?",
    "B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0007\u0006",
    "\u0002\u0002D\u0007\u0003\u0002\u0002\u0002EF\u0007\u0007\u0002\u0002",
    "FH\u0007\u0015\u0002\u0002GI\u0005\n\u0006\u0002HG\u0003\u0002\u0002",
    "\u0002IJ\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002",
    "\u0002\u0002KL\u0003\u0002\u0002\u0002LM\u0007\b\u0002\u0002M\t\u0003",
    "\u0002\u0002\u0002NR\u0007\t\u0002\u0002OQ\u0005\u0014\u000b\u0002P",
    "O\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002SX\u0003\u0002\u0002\u0002TR\u0003\u0002",
    "\u0002\u0002UW\u0005\u0016\f\u0002VU\u0003\u0002\u0002\u0002WZ\u0003",
    "\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002",
    "Y^\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[]\u0005\u0012\n",
    "\u0002\\[\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003",
    "\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_d\u0003\u0002\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002ac\u0005\u0018\r\u0002ba\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002",
    "\u0002\u0002eg\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gh\u0007",
    "\n\u0002\u0002h\u000b\u0003\u0002\u0002\u0002ij\u0007\f\u0002\u0002",
    "jk\u0007\u0015\u0002\u0002k\r\u0003\u0002\u0002\u0002lm\u0007\r\u0002",
    "\u0002mn\u0007\u0014\u0002\u0002n\u000f\u0003\u0002\u0002\u0002op\u0007",
    "\u000e\u0002\u0002pq\u0007\u001a\u0002\u0002qr\u0007\u001b\u0002\u0002",
    "r\u0011\u0003\u0002\u0002\u0002st\u0007\u000f\u0002\u0002tu\u0007\u0014",
    "\u0002\u0002u\u0013\u0003\u0002\u0002\u0002vw\u0007\u0011\u0002\u0002",
    "wx\u0007\u0014\u0002\u0002x\u0015\u0003\u0002\u0002\u0002yz\u0007\u0010",
    "\u0002\u0002z{\u0007\u0014\u0002\u0002{\u0017\u0003\u0002\u0002\u0002",
    "|~\u0007\u0012\u0002\u0002}\u007f\u0005\u001a\u000e\u0002~}\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007\u0018\u0002\u0002\u0083\u0019\u0003\u0002",
    "\u0002\u0002\u0084\u0086\u0007\u0014\u0002\u0002\u0085\u0084\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0007\u0017\u0002\u0002\u0088\u001b\u0003\u0002",
    "\u0002\u0002\u000e\u001f.4:@JRX^d\u0080\u0085"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DSLParser extends antlr4.Parser {

    static grammarFileName = "DSLParser.g4";
    static literalNames = [ null, null, "'as '", null, "'EndSound'", null, 
                            "'EndCombination'", "'Track'", "'EndTrack'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'*'", null, "']'", null, 
                            null, "'\"'" ];
    static symbolicNames = [ null, "SOUND_START", "AS", "SUBTYPE", "SOUND_END", 
                             "COMBINATION_START", "COMBINATION_END", "TRACK_START", 
                             "TRACK_END", "PLAY_START", "PATTERN_START", 
                             "REPEAT_START", "USESOUND_START", "VOLUME_START", 
                             "OFFSET_START", "MAXLENGTH_START", "COMPONENTS_START", 
                             "WS", "NUM", "TEXT", "MULTIPLY", "COMPONENT_NAME", 
                             "COMPONENTS_END", "COMMA", "USESOUNDS", "USESOUND_END" ];
    static ruleNames = [ "program", "play", "sound", "combination", "track", 
                         "pattern", "repeat", "usesound", "volume", "maxlength", 
                         "offset", "components", "component" ];

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
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.sound();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.SOUND_START);
	        this.state = 31;
	        this.combination();
	        this.state = 32;
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
	        this.state = 34;
	        this.match(DSLParser.PLAY_START);
	        this.state = 35;
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
	        this.state = 37;
	        this.match(DSLParser.SOUND_START);
	        this.state = 38;
	        this.match(DSLParser.TEXT);
	        this.state = 39;
	        this.match(DSLParser.AS);
	        this.state = 40;
	        this.match(DSLParser.SUBTYPE);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.PATTERN_START) {
	            this.state = 41;
	            this.pattern();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.REPEAT_START) {
	            this.state = 47;
	            this.repeat();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.USESOUND_START) {
	            this.state = 53;
	            this.usesound();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.VOLUME_START) {
	            this.state = 59;
	            this.volume();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
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
	        this.state = 67;
	        this.match(DSLParser.COMBINATION_START);
	        this.state = 68;
	        this.match(DSLParser.TEXT);
	        this.state = 70; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 69;
	            this.track();
	            this.state = 72; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.TRACK_START);
	        this.state = 74;
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
	        this.state = 76;
	        this.match(DSLParser.TRACK_START);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.MAXLENGTH_START) {
	            this.state = 77;
	            this.maxlength();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.OFFSET_START) {
	            this.state = 83;
	            this.offset();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.VOLUME_START) {
	            this.state = 89;
	            this.volume();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DSLParser.COMPONENTS_START) {
	            this.state = 95;
	            this.components();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
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
	        this.state = 103;
	        this.match(DSLParser.PATTERN_START);
	        this.state = 104;
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
	        this.state = 106;
	        this.match(DSLParser.REPEAT_START);
	        this.state = 107;
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
	        this.state = 109;
	        this.match(DSLParser.USESOUND_START);
	        this.state = 110;
	        this.match(DSLParser.USESOUNDS);
	        this.state = 111;
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
	        this.state = 113;
	        this.match(DSLParser.VOLUME_START);
	        this.state = 114;
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
	    this.enterRule(localctx, 18, DSLParser.RULE_maxlength);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(DSLParser.MAXLENGTH_START);
	        this.state = 117;
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
	    this.enterRule(localctx, 20, DSLParser.RULE_offset);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(DSLParser.OFFSET_START);
	        this.state = 120;
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
	    this.enterRule(localctx, 22, DSLParser.RULE_components);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(DSLParser.COMPONENTS_START);
	        this.state = 124; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 123;
	            this.component();
	            this.state = 126; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DSLParser.NUM || _la===DSLParser.COMPONENT_NAME);
	        this.state = 128;
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
	    this.enterRule(localctx, 24, DSLParser.RULE_component);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DSLParser.NUM) {
	            this.state = 130;
	            this.match(DSLParser.NUM);
	        }

	        this.state = 133;
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
DSLParser.MAXLENGTH_START = 15;
DSLParser.COMPONENTS_START = 16;
DSLParser.WS = 17;
DSLParser.NUM = 18;
DSLParser.TEXT = 19;
DSLParser.MULTIPLY = 20;
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
DSLParser.RULE_maxlength = 9;
DSLParser.RULE_offset = 10;
DSLParser.RULE_components = 11;
DSLParser.RULE_component = 12;

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

	NUM() {
	    return this.getToken(DSLParser.NUM, 0);
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
DSLParser.MaxlengthContext = MaxlengthContext; 
DSLParser.OffsetContext = OffsetContext; 
DSLParser.ComponentsContext = ComponentsContext; 
DSLParser.ComponentContext = ComponentContext; 
