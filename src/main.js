import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // Pastikan baris ini ada biar CSS buatanmu terbaca

const app = createApp(App)
app.use(router)
app.mount('#app')