const BuktiTransaksiTukar = {
  async render() {
    return `
    <div class="bukti-transaksi">
    <div class="container-transaksi">
        <h2>Bukti Transaksi</h2>
        <hr>
        <div class="split-side">
            <div class="left-side">
                <span><p>Nama</p></span>
                <p class="spacing">Arief Rahman Hakim</p>
                <span><p>Alamat</p></span>
                <p class="spacing">JL.jalan</p>
                <span><p>No. Telepon</p></span>
                <p class="spacing">123456789</p>
            </div>
            <div class="right-side">
                <span><p>Jenis Sampah</p></span>
                <p class="spacing">Kertas</p>
                <span><p>Jumlah</p></span>
                <p class="spacing">3 Kg</p>
                <span><p>Harga Per Kilo</p></span>
                <p class="spacing">Rp. 2000</p>
            </div>
        </div>
        <div class="total">
        <span><p>Total: </p></span><p>Rp.6000</p>
        </div>
        <p class="petunjuk">Silahkan tukarkan sampahmu ke alamat kami</p> 
    </div>
</div>
           `;
  },

  async afterRender() {
    console.log('BuktiTransaksiTukar');
  },
};

export default BuktiTransaksiTukar;
