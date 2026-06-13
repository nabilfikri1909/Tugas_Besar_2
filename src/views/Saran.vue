<template>
  <div class="container mt-5 pt-3">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="fw-bold mb-4 text-center text-primary">Buku Tamu & Saran</h2>
        <div class="card shadow-lg border-0 rounded-4 p-4">
          <form @submit.prevent="kirimPesan">
            <div class="mb-3">
              <label class="form-label fw-bold">Nama Lengkap</label>
              <input type="text" class="form-control" v-model="form.nama" required placeholder="Masukkan nama kamu">
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Pengalaman di Bogor</label>
              <textarea class="form-control" v-model="form.pesan" rows="4" required placeholder="Ceritakan pengalaman atau saranmu..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100 fw-bold">Kirim Pesan</button>
          </form>
          <div v-if="pesanTerkirim" class="alert alert-success mt-3 text-center">
            Terima kasih, {{ form.nama }}! Pesanmu berhasil dikirim.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Saran',
  data() {
    return {
      form: { nama: '', pesan: '' },
      pesanTerkirim: false
    }
  },
  methods: {
    kirimPesan() {
      this.pesanTerkirim = true;
      setTimeout(() => { 
        this.pesanTerkirim = false; 
        this.form.nama = ''; 
        this.form.pesan = '';
      }, 3000);
    }
  }
}
</script>