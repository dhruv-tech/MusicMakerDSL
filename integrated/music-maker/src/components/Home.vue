<template>
    <div class="container-fluid vh-100 container-responsive">
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" @click="modal.show()">
            Launch demo modal
        </button> -->

        <!-- Modal -->
        <!-- <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="modal.hide()">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> -->
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
                            docs here
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-2 gx-0 px-5">
            <div class="col gx-0 px-2 pt-1 bg-darker top-round align-right">
                <button id="run-btn" class="btn text-light" title="run code">
                    <i class="bi bi-file-earmark-play"></i>
                </button>
            </div>
            <div class="col gx-0 px-2 pt-1 top-round align-right">
                <div id="history-btn" class="btn text-grey" v-on:click="test()">
                    <b>
                        <i class="bi bi-arrow-counterclockwise"></i>
                        History
                    </b>
                    
                </div>
            </div>
        </div>
        <div id="content" class="row row-cols-2 gx-0 flex-grow-1 px-5 content-fill">
            <div id="editor-container" class="col gx-0 px-3 pt-2 text-white btm-round">
                <textarea id="code-editor-form" class="form-control" title="editor"></textarea>
            </div>
            <div id="output-container" class="col gx-0 px-3 pt-1 br-shadow btm-round">
                <div class="row gx-0">
                    <div class="container container-card">
                        <!-- This is just a sample card. The entire section needs to be added dynamically
                        with JS when we get output from the backend; -->
                        <div class="card">
                            <div class="card-body text-dark">
                                <div class="row gx-0">
                                    <div class="col-10 gx-0 px-2">
                                        <b>title of track?</b>
                                    </div>
                                    <div class="col-2 gx-0 px-2 pt-1 align-right">
                                        <i class="bi bi-download"></i>
                                    </div>
                                </div>
                                <div class="row gx-0">
                                    <audio controls>
                                        <source src="https://www.kozco.com/tech/LRMonoPhase4.wav">
                                        <p>Your browser does not support the<code>audio</code> element.</p>
                                    </audio>
                                </div>
                                <div class="row row-cols-2 gx-0 text-grey">
                                    <div class="col">
                                        ID:
                                    </div>
                                    <div class="col">
                                        expire:
                                    </div>
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
