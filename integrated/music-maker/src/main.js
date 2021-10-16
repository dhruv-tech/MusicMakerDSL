import { createApp } from 'vue'
import App from './App.vue'


import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).mount('#app')
