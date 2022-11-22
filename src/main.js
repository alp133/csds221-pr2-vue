const { createApp } = require('vue');
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import toast from '@k90mirzaei/vue-toast';

createApp(App).use(toast).mount('#app');
