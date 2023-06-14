import Layanan from './layanan';

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
                <p class="spacing">${Layanan.name}</p>
                <span><p>Alamat</p></span>
                <p class="spacing">${Layanan.addres}</p>
                <span><p>No. Telepon</p></span>
                <p class="spacing">${Layanan.phoneNumber}</p>
            </div>
            <div class="right-side">
                <span><p>Jenis Sampah</p></span>
                <p class="spacing">${Layanan.trashSpecification}</p>
                <span><p>Jumlah</p></span>
                <p class="spacing">${Layanan.amount} Kg</p>
                <span><p>Harga Per Kilo</p></span>
                <p class="spacing">Rp.${Layanan.price}</p>
            </div>
        </div>
        <div class="total">
        <span><p>Total: </p></span><p>Rp.${Layanan.total}</p>
        </div>
        <p class="petunjuk">Silahkan tukarkan sampahmu ke alamat kami</p> 
    </div>
</div>
           `;
  },

  async afterRender() {
    Layanan.resetValue();
  },
};

export default BuktiTransaksiTukar;
