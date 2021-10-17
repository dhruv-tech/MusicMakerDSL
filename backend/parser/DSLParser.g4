parser grammar DSLParser;
options { tokenVocab=DSLLexer; }

program: sound+ combination play;
play: PLAY_START TEXT;
sound: SOUND_START TEXT AS SUBTYPE pattern repeat? usesound SOUND_END;
combination: COMBINATION_START TEXT track+ COMBINATION_END;
track: TRACK_START offset? volume? components* TRACK_END;

//Options
pattern: PATTERN_START TEXT;
repeat: REPEAT_START NUM;
usesound: USESOUND_START USESOUNDS USESOUND_END;
volume: VOLUME_START NUM;
offset: OFFSET_START NUM;
components: COMPONENTS_START component+ COMPONENTS_END;
component: COMPONENT_REPEAT? COMPONENT_NAME;
