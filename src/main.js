import { createApp } from 'vue'
// bootstrap css/icons
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// fontawesome icons
import '@fortawesome/fontawesome-free/css/all.css'

// axios is installed, use import axios from 'axios', in the component when you need to use it

import App from './App.vue'

// ROUTER
import { router } from './router'

createApp(App).use(router).mount('#app')
