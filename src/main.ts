import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'

// import 'codyhouse-framework/main/assets/js/util.js'

createApp(App)
    .use(router)
    .mount('#app')
