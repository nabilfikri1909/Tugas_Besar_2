<template>
  <div id="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">🌿 Explore Bogor</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Beranda</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/destinasi">Destinasi Alam</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/kuliner">Kuliner</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/saran">Buku Tamu</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <footer class="bg-dark text-white text-center py-4 mt-5">
      <p class="mb-0">&copy; 2026 Explore Bogor. Dibuat untuk UAS Web Dasar.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.main-content {
  min-height: 80vh;
}
.nav-link.router-link-exact-active {
  font-weight: bold;
  color: #ffc107 !important;
  border-bottom: 2px solid #ffc107;
}
</style>