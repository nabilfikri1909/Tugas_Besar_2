<template>
  <div class="container mt-5 pt-3 position-relative">
    <h2 class="fw-bold mb-4 border-bottom pb-2 text-warning">🍲 Kuliner Khas Bogor</h2>
    
    <div class="row">
      <div class="col-md-6 mb-4" v-for="makanan in daftarKuliner" :key="makanan.id">
        <div class="card card-hover shadow-sm flex-row" @click="bukaPopup(makanan)" style="cursor: pointer;">
          <img :src="makanan.gambar" class="img-fluid" style="width: 200px; object-fit: cover;" alt="kuliner">
          <div class="card-body d-flex flex-column justify-content-center">
            <h4 class="card-title fw-bold">{{ makanan.nama }}</h4>
            <p class="card-text text-muted">{{ makanan.deskripsi }}</p>
            <span class="text-warning small fw-bold"><i class="fa-solid fa-hand-pointer"></i> Klik untuk selengkapnya</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="itemTerpilih" class="modal-overlay" @click.self="tutupPopup">
      <div class="modal-custom p-4 rounded-4 shadow-lg bg-white text-center">
        <h3 class="fw-bold text-warning mb-2">{{ itemTerpilih.nama }}</h3>
        <img :src="itemTerpilih.gambar" class="img-fluid rounded-3 mb-3" style="height: 200px; width: 100%; object-fit: cover;">
        <p class="text-secondary mb-4">{{ itemTerpilih.detail }}</p>
        
        <div class="d-flex justify-content-center gap-3">
          <a :href="itemTerpilih.link" target="_blank" class="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-sm">
            <i class="fa-solid fa-link"></i> Kunjungi Info
          </a>
          <button @click="tutupPopup" class="btn btn-secondary fw-bold px-4 rounded-pill shadow-sm">Tutup</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Kuliner',
  data() {
    return {
      itemTerpilih: null,
      daftarKuliner: [
        { 
          id: 1, 
          nama: 'Soto Kuning Bogor', 
          deskripsi: 'Kuah santan kuning yang kaya rempah dengan daging empuk.', 
          detail: 'Hidangan ikonik dari Bogor ini terkenal dengan kuah santannya yang gurih dan berwarna kuning pekat karena bumbu kunyit. Biasanya disajikan dengan campuran daging sapi, babat, paru, dan perasan jeruk nipis.',
          link: 'https://id.wikipedia.org/wiki/Soto_kuning', // <-- TARUH LINK KAMU DI SINI
          gambar: '/src/assets/soto_kuning.jpeg' 
        },
        { 
          id: 2, 
          nama: 'Asinan Bogor', 
          deskripsi: 'Sajian segar dari sayuran dan buah dengan kuah pedas manis.', 
          detail: 'Asinan Bogor memiliki dua varian: asinan buah dan asinan sayur. Rasanya sangat unik karena perpaduan pedas, asam, manis, dan gurih, disajikan dingin dengan taburan kerupuk mi kuning khas.',
          link: 'https://indonesiakaya.com/pustaka-indonesia/kesegaran-asinan-bogor-yang-menggugah-selera/', // <-- TARUH LINK KAMU DI SINI
          gambar: '/src/assets/asinan_bogor.jpg' 
        }
      ]
    }
  },
  methods: {
    bukaPopup(makanan) {
      this.itemTerpilih = makanan;
    },
    tutupPopup() {
      this.itemTerpilih = null;
    }
  }
}
</script>

<style scoped>
/* Latar Belakang Gelap Popup */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex; justify-content: center; align-items: center;
  z-index: 9999;
}

/* Kotak Popup & Animasinya */
.modal-custom {
  max-width: 500px;
  width: 90%;
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>