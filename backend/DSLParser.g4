parser grammar DSLParser;
options { tokenVocab=DSLLexer; }

program: sound+ combination PLAY;
sound: SOUND_START TEXT (PRESET | CLIP) pattern* repeat* usesound* volume* SOUND_END;
combination: COMBINATION_START TEXT track+;
track: TRACK_START maxlength* offset* volume* components* TRACK_END;

//Options
pattern: PATTERN TEXT;
repeat: REPEAT NUM;
usesound: USESOUND TEXT;
volume: VOLUME NUM;
maxlength: MAXLENGTH NUM;
offset: OFFSET NUM;
components: COMPONENTS TEXT;
