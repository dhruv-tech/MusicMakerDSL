lexer grammar DSLLexer;

SOUND_START : 'Sound' WS* -> mode(TEXT_MODE);
PRESET: 'as Preset';
CLIP: 'as Clip';
SOUND_END: 'EndSound';

COMBINATION_START : 'Combination' WS* -> mode(TEXT_MODE);

TRACK_START: 'Track' WS*;
TRACK_END: 'EndTrack' WS*;

PLAY: 'Play' WS* -> mode(TEXT_MODE);

//Options
PATTERN: 'Pattern:' WS* -> mode(TEXT_MODE);
REPEAT: 'Repeat:' WS*;
USESOUND: 'UseSound:' WS* -> mode(TEXT_MODE);
VOLUME: 'Volume:' WS*;
OFFSET: 'Offset:' WS*;
MAXLENGTH: 'MaxLength:' WS*;
COMPONENTS: 'Components:' WS* -> mode(TEXT_MODE);

WS : [\r\n\t ] -> channel(HIDDEN);
NUM : [0-9]+;

mode TEXT_MODE;
TEXT : ~[[\]\r\n ]+ -> mode(DEFAULT_MODE);