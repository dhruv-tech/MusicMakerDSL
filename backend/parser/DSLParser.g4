parser grammar DSLParser;
options { tokenVocab=DSLLexer; }

program: sound+ combination play;
play: PLAY_START TEXT;
sound: SOUND_START TEXT AS SUBTYPE pattern* repeat* usesound* volume* SOUND_END;
combination: COMBINATION_START TEXT track+ COMBINATION_END;
track: TRACK_START maxlength* offset* volume* components* TRACK_END;

//Options
pattern: PATTERN_START TEXT;
repeat: REPEAT_START NUM;
usesound: USESOUND_START USESOUNDS USESOUND_END;
volume: VOLUME_START NUM;
maxlength: MAXLENGTH_START NUM;
offset: OFFSET_START NUM;
components: COMPONENTS_START component+ COMPONENTS_END;
component: NUM? COMPONENT_NAME;
