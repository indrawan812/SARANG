const Layanan = {
  async render() {
    return `
      <div class="jumbtrone-layanan">
            <div class="jumbtrone-layanan-image"></div>
            <div class="jumbtrone-layanan-txt">
                <h2>Melayani Pengelolaan Sampah</h2>
                <p>Setiap langkah kecil dalam pengelolaan sampah sangat berarti. Kami siap menjadi mitra Anda dalam mengurangi, mendaur ulang, dan memanfaatkan sampah secara bertanggung jawab.</p>
                <div class="button-group">
                    <a id="button-exchange" href="#container-form-exchange"><button>Tukar Sampah</button></a>
                    <a id="button-sell" href="#container-form-sell"><button>Jual Pupuk Kompos</button></a>
                </div>
            </div>
        </div>
        <div class="info-layanan">
            <h2>Sampah Yang Dapat Ditukarkan</h2>
            <hr>
            <p class="underscore">Sampah Anorganik</p>
            <div class="trash-example">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p class="underscore">Sampah Organik</p>
            <p>Bahan - bahan organik seperti rumput, daun, limbah dapur, atau sisa-sisa tanaman dapat digunakan untuk membuat pupuk kompos cair. Bahan organik ini dicincang halus, dicampurkan dengan air, dan difermentasi untuk menghasilkan pupuk yang kaya akan nutrisi.</p>
        </div>
        <div id="container-form-exchange" class="container-form-exchange hide-content">
            <div class="form-exchange">
                <h2>Tukar Sampah</h2>
                <hr>
                <p>Form Pendaftaran</p>
                <form action="">
                    <label for="name">Nama</label>
                    <input type="text" id="name" placeholder="Masukan Nama" required>
                    <label for="addres">Alamat</label>
                    <input type="text" id="addres" placeholder="Masukan Alamat" required>
                    <label for="phone-number">No. Telepon</label>
                    <input type="number" id="phone-number" placeholder="Masukan Nomer Telephone" required>
                    <div class="split-side">
                        <div class="left-side">
                            <label for="trash-specification">Jenis Sampah</label>
                            <select id="trash-specification" required>
                                <option value="kertas">Kertas</option>
                                <option value="kardus">Kardus</option>
                                <option value="kaleng">Kaleng</option>
                                <option value="botol">Botol Kaca</option>
                            </select>
                            <label for="trash-amount">Jumlah Sampah (Kg)</label>
                            <input type="number" id="trash-amount" placeholder="Masukan Jumlah Sampah" required>
                        </div>
                        <div class="right-side">
                            <label >Harga Per Kilo</label>
                            <input type="text" readonly>
                            <label >Total Harga</label>
                            <input type="text" readonly>
                        </div>
                    </div>
                    <input id="tukar" type="submit" value="Tukar">
                </form>
            </div>
        </div>
        <div id="container-form-sell" class="container-form-sell hide-content">
            <div class="form-sell">
                <h2>Jual Pupuk Kompos Cair</h2>
                <hr>
                <p>Form Pendaftaran</p>
                <form action="">
                    <label for="name">Nama</label>
                    <input type="text" id="name" placeholder="Masukan Nama" required>
                    <label for="addres">Alamat</label>
                    <input type="text" id="addres" placeholder="Masukan Alamat" required>
                    <label for="phone-number">No. Telepon</label>
                    <input type="number" id="phone-number" placeholder="Masukan Nomer Telephone" required>
                    <div class="split-side">
                        <div class="left-side">
                            <label for="trash-amount">Jumlah Pupuk (L)</label>
                            <input type="number" id="trash-amount" placeholder="Masukan Jumlah Pupuk" required>
                        </div>
                        <div class="right-side">
                            <label >Harga Per Liter</label>
                            <input type="text" readonly>
                            <label >Total Harga</label>
                            <input type="text" readonly>
                        </div>
                    </div>
                    <input id="jual" type="submit" value="Jual">
                </form>
            </div>
        </div>
        <div  id="overlay-exchange" class="overlay-exchange">
            <div class="container-confirmation">
                <h2>Konfirmasi</h2>
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
                <a id="oke-exchange" href="#/bukti-transaksi-tukar"><button>Konfirmasi</button><a>
                <a id="cancel-exchange">Batal<a> 
            </div>
        </div>
        <div  id="overlay-sell" class="overlay-sell">
            <div class="container-confirmation">
                <h2>Konfirmasi</h2>
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
                        <span><p>Jumlah</p></span>
                        <p class="spacing">3 L</p>
                        <span><p>Harga Per Liter</p></span>
                        <p class="spacing">Rp. 2000</p>
                    </div>
                </div>
                <div class="total">
                <span><p>Total: </p></span><p>Rp.6000</p>
                </div>
                <a id="oke-sell" href="#/bukti-transaksi-jual"><button>Konfirmasi</button><a>
                <a id="cancel-sell">Batal<a> 
            </div>
        </div>
        `;
  },

  async afterRender() {
    const buttonExchange = document.querySelector('#button-exchange');
    const formExchange = document.querySelector('#container-form-exchange');

    const buttonSell = document.querySelector('#button-sell');
    const formSell = document.querySelector('#container-form-sell');

    buttonExchange.addEventListener('click', () => {
      formExchange.classList.remove('hide-content');
      formSell.classList.add('hide-content');
    });

    buttonSell.addEventListener('click', () => {
      formSell.classList.remove('hide-content');
      formExchange.classList.add('hide-content');
    });

    const buttonExchangeConfirm = document.querySelector('#tukar');
    const overlayExchange = document.querySelector('#overlay-exchange');
    const cancelOverlayExchange = document.querySelector('#cancel-exchange');

    buttonExchangeConfirm.addEventListener('click', () => {
      overlayExchange.classList.add('open');
    });

    cancelOverlayExchange.addEventListener('click', () => {
      overlayExchange.classList.remove('open');
    });

    const buttonSellConfirm = document.querySelector('#jual');
    const overlaySell = document.querySelector('#overlay-sell');
    const cancelOverlaySell = document.querySelector('#cancel-sell');

    buttonSellConfirm.addEventListener('click', () => {
      overlaySell.classList.add('open');
    });

    cancelOverlaySell.addEventListener('click', () => {
      overlaySell.classList.remove('open');
    });
  },
};

export default Layanan;
