import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/global.css'
import { registerGlobalComponents } from './util/import'

const app = createApp(App)
registerGlobalComponents(app)
app.use(store)
app.use(router)
app.mount('#app')
