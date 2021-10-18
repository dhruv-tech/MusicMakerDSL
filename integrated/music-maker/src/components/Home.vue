<template>
    <div class="container-fluid vh-100 container-responsive">
        <div id="header" class="row gx-0 header-row px-5">
            <div class="col-2">Logo?</div>
            <div class="col-8 title-text">Music Maker</div>
            <div class="col-2 align-right">
                <button id="docs-btn" type="button" class="btn button-custom text-inherit" @click="modal.show()">Docs</button>
            </div>
            <div class="modal fade" ref="docsModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-grey font-regular" id="dosModalTitle">A Guide To Writing DSL for Music Maker</h5>
                            <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body text-dark font-regular">
                            <p>
                                The Music Maker is a Domain-Specific Language (DSL) that allows users with minimal or no background
                                in Programming to quickly create basic musical tune with the following grammar rules:
                            </p>
                            <pre>
                                <code>
<!--                             -->program         : sound+ combination play
<!--                             -->sound           : 'Sound ' soundname 'as ' SUBTYPE pattern repeat? usesound 'EndSound'
<!--                             -->soundname       : TEXT
<!--                             -->pattern         : 'Pattern:' TEXT
<!--                             -->repeat          : 'Repeat:' NUM
<!--                             -->usesound        : 'UseSound:' USESOUNDS '"'
<!--                             -->combination     : 'Components:' TEXT track+ 'EndCombination'
<!--                             -->track           : 'Track' maxlength? offset? volume? components* 'EndTrack'
<!--                             -->maxlength       : 'MaxLength:' NUM
<!--                             -->offset          : 'Offset:' NUM
<!--                             -->volume          : 'Volume:' NUM
<!--                             -->components      : 'Components:' '[' component [','component]* ']'
<!--                             -->component       : NUM? '*' COMPONENT_NAME
<!--                             -->play            : 'Play' TEXT

<!--                             -->TEXT            : ~[[\]\r\n ]+
<!--                             -->SUBTYPE         : 'Preset' | 'Clip';
<!--                             -->NUM             : [0-9]+
<!--                             -->USESOUNDS       : ~[[\]'"]+
<!--                             -->COMPONENT_NAME  : ~[[\]\r\n,* ]+
                                </code>
                            </pre>
                            <p>
                                In addition to the grammar rules above, a few logical rules are in place in order for the DSL to
                                run properly:
                            </p>
                            <ul>
                                <li>
                                    The <code>pattern</code> must be a string consisting of any combination of only characters
                                    "x" and "-" and no other characters, where an "x" means to play a note, where as "-" means
                                    rest (don't play a note)
                                </li>
                                <li>TEXT in each <code>component</code> must match a <code>soundname</code> created by you</li>
                                <li>
                                    If a <code>sound</code> has <code>SUBTYPE</code> "Clip", <code>USESOUNDS</code> must be
                                    a single line of text, with each note following the pattern of {note}{octave} with a space
                                    between each note(e.g. "C2 G9")
                                </li>
                                <li>
                                     If a <code>sound</code> has <code>SUBTYPE</code> "Preset", then the <code>USESOUNDS</code>
                                     must match exactly with any one of the following sound names provided: "Kick", "Base",
                                     "Snare", "OpenHats", or "ClosedHats"
                                </li>
                                <li>
                                    The indentation level on each line does not affect the success/failure of running the DSL.
                                </li>
                            </ul>
                            <p>
                                Below is example of a working DSL for Music Maker is:
                            </p>
                            <pre>
                                <code>
<!--                             -->Sound Kick1 as Preset
<!--                             -->    Pattern: x-xx-x
<!--                             -->    Repeat: 10
<!--                             -->    UseSound: "Kick"
<!--                             -->EndSound

<!--                             -->Sound Melody1 as Clip
<!--                             -->    Pattern: x
<!--                             -->    Repeat: 5
<!--                             -->    UseSound: "C1 D2 F7"
<!--                             -->    EndSound

<!--                             -->Combination Draft1
<!--                             -->    Track
<!--                             -->        MaxLength: 50
<!--                             -->        Volume: 10
<!--                             -->        Components: [5*Kick1, 5*Melody1]
<!--                             -->    EndTrack
<!--                             -->    Track
<!--                             -->        MaxLength: 35
<!--                             -->        Offset: 10
<!--                             -->        Volume: 5
<!--                             -->        Components: [15*Kick1, 6*Melody1]
<!--                             -->    EndTrack
<!--                             -->EndCombination
<!--                             -->Play Draft1
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-2 gx-0 px-5">
            <div class="col gx-0 px-2 pt-1 bg-darker top-round align-right">
                <button id="run-btn" class="btn text-light" title="run DSL" @click="runDSL()">
                    <i class="bi bi-file-earmark-play"></i>
                </button>
            </div>
            <div class="col gx-0 px-2 pt-1 top-round align-right">
                <div id="history-btn" class="btn text-grey" @click="test()">
                    <b>
                        <i class="bi bi-arrow-counterclockwise"></i>
                        History
                    </b>
                    
                </div>
            </div>
        </div>
        <div id="content" class="row row-cols-2 gx-0 flex-grow-1 px-5 content-fill">
            <div id="editor-container" class="col gx-0 px-3 pt-2 text-white btm-round">
                <textarea type="text" id="code-editor-form" class="form-control" title="editor" v-model="dslStr"></textarea>
            </div>
            <div id="output-container" class="col gx-0 px-3 pt-1 br-shadow btm-round">
                <div class="row gx-0">
                    <div class="container container-card">
                        <!-- This is just a sample card. The entire section needs to be added dynamically
                        with JS when we get output from the backend; -->
                        <div v-for="recording in recordings" class="card">
                            <div class="card-body text-dark">
                                <div class="row gx-0">
                                    <div class="col-12 gx-0 px-2">
                                        <b>{{ recording.name }}</b>
                                    </div>
                                </div>
                                <div class="row gx-0">
                                    <audio controls v-bind:src="recording.link">
                                        <p>Your browser does not support the<code>audio</code> element.</p>
                                    </audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer" class="row gx-0 px-5">
            © 2021 CPSC 410 Team 24. All Rights Reserved.
        </div>
    </div>
</template>

<script>
  import '../assets/styles.css';
  import component from './Home.js';
  export default component;
</script>
