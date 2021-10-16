<template>
  <div class="hello">
    <div class="container-fluid vh-100 container-responsive">
        <div id="header" class="row gx-0 header-row px-5">
            <div class="col-2">Logo?</div>
            <div class="col-8 title-text">Music Maker</div>
            <div class="col-2 align-right">
                <button id="docs-btn" type="button" class="btn button-custom text-inherit">Docs</button>
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
                <div class="row gx-0">output</div>
            </div>
        </div>
        <div id="footer" class="row gx-0 px-5">
            © 2021 CPSC 410 Team 24. All Rights Reserved.
        </div>
      </div>
  </div>
</template>

<script>
  import '../assets/styles.css';
  import component from './Home.js';
  export default component;
</script>
