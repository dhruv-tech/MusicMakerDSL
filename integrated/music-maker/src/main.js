import { createApp } from 'vue'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import * as Tone from 'tone';
window.Tone = Tone;

import 'popper.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'

const app = createApp(App);
app.mount('#app')
