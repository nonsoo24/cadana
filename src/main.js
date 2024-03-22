import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import { VsxIcon } from "vue-iconsax";

createApp(App).use(router).component("VsxIcon", VsxIcon).mount('#app')