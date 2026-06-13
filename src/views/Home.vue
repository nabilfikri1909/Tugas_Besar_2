<template>
  <div>
    <div class="hero-wrapper">
      <video class="video-bg" autoplay muted loop playsinline>
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4">
      </video>

      <div class="hero-overlay d-flex align-items-center justify-content-center text-center text-white">
        <div class="hero-content p-5 rounded-4 shadow-lg">
          <h1 class="display-3 fw-bold mb-3">Pesona Kota Hujan</h1>
          <p class="lead fs-4 mb-4">Temukan keindahan alam dan kesejukan yang hakiki di Bogor.</p>
          <router-link to="/destinasi" class="btn btn-warning btn-lg fw-bold rounded-pill px-5 shadow">Mulai Jelajah</router-link>
        </div>
      </div>
    </div>

    <div class="container mt-5 mb-5 pt-4">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h2 class="fw-bold mb-4 text-success border-bottom border-success pb-2 d-inline-block">👨‍💻 Profil Mahasiswa</h2>
          
          <div class="card shadow-lg border-0 p-4 rounded-4 mt-3" style="background: linear-gradient(135deg, #2c3e50, #3498db); color: white;">
            <div class="row align-items-center text-start">
              <div class="col-md-4 text-center border-end border-light d-none d-md-block">
                <i class="fa-solid fa-user-graduate fa-6x text-warning mb-2"></i>
              </div>
              
              <div class="col-md-8 ps-md-4 mt-3 mt-md-0">
                <h3 class="fw-bold text-warning mb-1">Muhammad Nabil Fikri</h3>
                <h5 class="mb-3 text-light">NIM: 2507411077</h5>
                <hr class="border-light opacity-50">
                <p class="mb-1 fs-5"><strong>Kelas:</strong> TI-2B</p>
                <p class="mb-1"><strong>Mata Kuliah:</strong> Pemrograman Web Dasar</p>
                <p class="mb-0"><strong>Tugas:</strong> Projek UAS (Tubes 2)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Wadah khusus untuk Video agar profil di bawahnya tetap terlihat */
.hero-wrapper {
  position: relative;
  height: 85vh; 
  width: 100%;
  overflow: hidden;
  margin-top: -20px;
}

/* Pengaturan Video */
.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
  z-index: 0;
}

/* Overlay Hitam Transparan */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 1; 
}

/* Efek Kaca pada Teks */
.hero-content {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.hero-content:hover {
  transform: scale(1.02);
}
</style>