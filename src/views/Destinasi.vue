<template>
  <div class="container mt-5 pt-3 position-relative">
    <h2 class="fw-bold mb-4 border-bottom pb-2 text-success">🌲 Destinasi Alam Bogor</h2>
    
    <div class="row">
      <div class="col-md-4 mb-4" v-for="wisata in daftarWisata" :key="wisata.id">
        <div class="card card-hover shadow-sm" @click="bukaPopup(wisata)" style="cursor: pointer;">
          <img :src="wisata.gambar" class="card-img-top img-cover" alt="wisata">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ wisata.nama }}</h5>
            <p class="card-text text-muted">{{ wisata.deskripsi }}</p>
            <span class="text-success small fw-bold"><i class="fa-solid fa-hand-pointer"></i> Klik untuk detail</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="itemTerpilih" class="modal-overlay" @click.self="tutupPopup">
      <div class="modal-custom p-4 rounded-4 shadow-lg bg-white text-center">
        <h3 class="fw-bold text-success mb-2">{{ itemTerpilih.nama }}</h3>
        <img :src="itemTerpilih.gambar" class="img-fluid rounded-3 mb-3" style="height: 200px; width: 100%; object-fit: cover;">
        <p class="text-secondary mb-4">{{ itemTerpilih.detail }}</p>
        
        <div class="d-flex justify-content-center gap-3">
          <a :href="itemTerpilih.link" target="_blank" class="btn btn-success fw-bold px-4 rounded-pill shadow-sm">
            <i class="fa-solid fa-map-location-dot"></i> Buka Link/Maps
          </a>
          <button @click="tutupPopup" class="btn btn-secondary fw-bold px-4 rounded-pill shadow-sm">Tutup</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Destinasi',
  data() {
    return {
      itemTerpilih: null, // Wadah untuk menyimpan data yang sedang diklik
      daftarWisata: [
        { 
          id: 1, 
          nama: 'Kebun Raya Bogor', 
          deskripsi: 'Paru-paru kota dengan ribuan tumbuhan.', 
          detail: 'Kebun Raya Bogor adalah kebun botani besar dan tertua di Asia Tenggara. Berada di pusat kota Bogor, tempat ini tidak hanya menawarkan udara yang sangat sejuk, tapi juga nilai sejarah tinggi dengan Istana Kepresidenan di dalamnya.',
          link: 'https://maps.app.goo.gl/zbTNvNAUs17mQDm87',
          gambar: '/src/assets/kebon_raya_bogor.jpg'
        },
        { 
          id: 2, 
          nama: 'Curug Leuwi Hejo', 
          deskripsi: 'Green Canyon versi Bogor yang jernih.', 
          detail: 'Air terjun yang sangat populer karena warna airnya yang biru kehijauan bagaikan kristal. Jalur trekking menuju curug ini sangat memanjakan mata dengan pemandangan perbukitan Sentul yang asri.',
          link: 'https://maps.app.goo.gl/8pcxWgdnXibU7jxa6',
          gambar: '/src/assets/curug_leuwi.jpg'
        },
        { 
          id: 3, 
          nama: 'Gunung Pancar', 
          deskripsi: 'Hutan pinus estetik nan rindang.', 
          detail: 'Terletak di kawasan Sentul, Gunung Pancar menawarkan pesona hutan pinus yang menjulang tinggi. Sangat cocok untuk kamu yang ingin lari dari hiruk pikuk kota, melakukan glamping, atau berfoto ria.',
          link: 'https://maps.app.goo.gl/3wnDRno6eqSNS8Aw8',
          gambar: '/src/assets/gunung_pancar.jpg'
        }
      ]
    }
  },
  methods: {
    bukaPopup(wisata) {
      this.itemTerpilih = wisata; // Mengisi data saat diklik
    },
    tutupPopup() {
      this.itemTerpilih = null; // Mengosongkan data untuk menutup popup
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