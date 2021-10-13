parser grammar DSLParser;
options { tokenVocab=DSLLexer; }

program: sound+ combination PLAY;
sound: SOUND_START TEXT (PRESET | CLIP) pattern* repeat* usesound* volume* SOUND_END;
combination: COMBINATION_START TEXT track+;
track: TRACK_START maxlength* offset* volume* components* TRACK_END;

//Options
pattern: PATTERN_START TEXT;
repeat: REPEAT_START NUM;
usesound: USESOUND_START USESOUNDS+ USESOUNDS_END;
volume: VOLUME_START NUM;
maxlength: MAXLENGTH_START NUM;
offset: OFFSET_START NUM;
components: COMPONENTS_START component+ COMPONENTS_END;
component: COMPONENT_REPEAT* COMPONENT_NAME;
