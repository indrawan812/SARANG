import Layanan from './layanan';

const BuktiTransaksiJual = {
  async render() {
    return `
      <div class="bukti-jual">
      <div class="container-jual">
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
                  <span><p>Jumlah</p></span>
                  <p class="spacing">${Layanan.amount} L</p>
                  <span><p>Harga Per L</p></span>
                  <p class="spacing">Rp.${Layanan.pupukPrice}</p>
              </div>
          </div>
          <div class="total">
          <span><p>Total: </p></span><p>Rp.${Layanan.total}</p>
          </div>
          <p class="petunjuk">Silahkan bawa dan jual pupukmu ke alamat kami</p> 
      </div>
  </div>
             `;
  },

  async afterRender() {
    console.log('BuktiTransaksiJual');
  },
};

export default BuktiTransaksiJual;
