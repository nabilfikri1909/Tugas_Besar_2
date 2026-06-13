import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Destinasi from './views/Destinasi.vue'
import Kuliner from './views/Kuliner.vue' // Halaman tambahan agar genap 5
import Saran from './views/Saran.vue'
import About from './views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/destinasi', name: 'Destinasi', component: Destinasi },
    { path: '/kuliner', name: 'Kuliner', component: Kuliner },
    { path: '/saran', name: 'Saran', component: Saran },
    { path: '/about', name: 'About', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 } // Otomatis scroll ke atas saat ganti halaman
    }
})

export default router