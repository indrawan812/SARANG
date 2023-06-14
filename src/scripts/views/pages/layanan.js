const Layanan = {

  name: '',
  addres: '',
  phoneNumber: '',
  trashSpecification: '',
  amount: '',
  price: '',
  pupukPrice: 20000,
  total: '',

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
                                <option value="Kertas">Kertas</option>
                                <option value="Kardus">Kardus</option>
                                <option value="Kaleng">Kaleng</option>
                                <option value="Botol Kaca">Botol Kaca</option>
                            </select>
                            <label for="trash-amount">Jumlah Sampah (Kg)</label>
                            <input type="number" id="trash-amount" placeholder="Masukan Jumlah Sampah" required>
                        </div>
                        <div class="right-side">
                            <label >Harga Per Kilo</label>
                            <input type="text" id="exchange-trash-price" value="" readonly>
                            <label >Total Harga</label>
                            <input type="text value="" id="exchange-trash-total" readonly>
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
                    <label for="name-sell">Nama</label>
                    <input type="text" id="name-sell" placeholder="Masukan Nama" required>
                    <label for="addres-sell">Alamat</label>
                    <input type="text" id="addres-sell" placeholder="Masukan Alamat" required>
                    <label for="phone-number-sell">No. Telepon</label>
                    <input type="number" id="phone-number-sell" placeholder="Masukan Nomer Telephone" required>
                    <div class="split-side">
                        <div class="left-side">
                            <label for="trash-amount-sell">Jumlah Pupuk (L)</label>
                            <input type="number" id="trash-amount-sell" placeholder="Masukan Jumlah Pupuk" required>
                        </div>
                        <div class="right-side">
                            <label >Harga Per Liter</label>
                            <input type="text" value="20000" readonly>
                            <label >Total Harga</label>
                            <input type="text" id="total-sell" value="" readonly>
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
                        <p class="spacing" id="overlay-name"></p>
                        <span><p>Alamat</p></span>
                        <p class="spacing" id="overlay-addres"></p>
                        <span><p>No. Telepon</p></span>
                        <p class="spacing" id="overlay-no"></p>
                    </div>
                    <div class="right-side">
                        <span><p>Jenis Sampah</p></span>
                        <p class="spacing" id="overlay-jenis"></p>
                        <span><p>Jumlah</p></span>
                        <p class="spacing" id="overlay-jumlah"></p>
                        <span><p>Harga Per Kilo</p></span>
                        <p class="spacing" id="overlay-price"></p>
                    </div>
                </div>
                <div class="total">
                <span><p>Total: </p></span><p id="overlay-exchange-total"></p>
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
                        <p class="spacing" id="overlay-name-sell"></p>
                        <span><p>Alamat</p></span>
                        <p class="spacing" id="overlay-addres-sell"></p>
                        <span><p>No. Telepon</p></span>
                        <p class="spacing" id="overlay-no-sell"></p>
                    </div>
                    <div class="right-side">
                        <span><p>Jumlah</p></span>
                        <p class="spacing" id="overlay-jumlah-sell"></p>
                        <span><p>Harga Per Liter</p></span>
                        <p class="spacing">Rp.20000</p>
                    </div>
                </div>
                <div class="total">
                <span><p>Total: </p></span><p id="overlay-total-sell"></p>
                </div>
                <a id="oke-sell" href="#/bukti-transaksi-jual"><button>Konfirmasi</button><a>
                <a id="cancel-sell">Batal<a> 
            </div>
        </div>
        `;
  },

  async afterRender() {
    const kertasPrice = 3000;
    const kardusPrice = 6000;
    const kalengPrice = 3000;
    const botolKacaPrice = 5000;

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

    buttonExchangeConfirm.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.name === '' || this.addres === '' || this.phoneNumber === '' || this.amount === '' || this.amount === '0' || this.trashSpecification === '' || this.amount === '' || this.price === '') {
        alert('Mohon lengkapi semua inputan sebelum melanjutkan!');
      } else {
        // Jika semua input telah diisi
        overlayExchange.classList.add('open');
      }
    });

    cancelOverlayExchange.addEventListener('click', () => {
      overlayExchange.classList.remove('open');
    });

    const buttonSellConfirm = document.querySelector('#jual');
    const overlaySell = document.querySelector('#overlay-sell');
    const cancelOverlaySell = document.querySelector('#cancel-sell');

    buttonSellConfirm.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.name === '' || this.addres === '' || this.phoneNumber === '' || this.amount === '' || this.amount === '0' || this.amount === '') {
        alert('Mohon lengkapi semua inputan sebelum melanjutkan!');
      } else {
        // Jika semua input telah diisi
        overlaySell.classList.add('open');
      }
    });

    cancelOverlaySell.addEventListener('click', () => {
      overlaySell.classList.remove('open');
    });

    // konfigurasi overlay exchange
    const name = document.querySelector('#name');
    const addres = document.querySelector('#addres');
    const phoneNumber = document.querySelector('#phone-number');
    const trashSpecification = document.querySelector('#trash-specification');
    const trashAmount = document.querySelector('#trash-amount');
    const overlayTotal = document.querySelector('#overlay-exchange-total');

    name.addEventListener('input', () => {
      const nameValue = name.value;
      const overlayName = document.querySelector('#overlay-name');
      overlayName.innerHTML = nameValue;
      this.name = nameValue;
    });

    addres.addEventListener('input', () => {
      const addresValue = addres.value;
      const overlayAddres = document.querySelector('#overlay-addres');
      overlayAddres.innerHTML = addresValue;
      this.addres = addresValue;
    });

    phoneNumber.addEventListener('input', () => {
      const phoneNumberValue = phoneNumber.value;
      const overlayPhoneNumberValue = document.querySelector('#overlay-no');
      overlayPhoneNumberValue.innerHTML = phoneNumberValue;
      this.phoneNumber = phoneNumberValue;
    });

    trashSpecification.addEventListener('change', () => {
      const trashSpecificationValue = trashSpecification.value;
      const overlayTrashSpecificationValue = document.querySelector('#overlay-jenis');
      overlayTrashSpecificationValue.innerHTML = trashSpecificationValue;
      this.trashSpecification = trashSpecificationValue;

      const trashPrice = document.querySelector('#overlay-price');
      const exchangeTrashPrice = document.querySelector('#exchange-trash-price');

      const trashAmountValue = trashAmount.value;
      const exchangeTrashTotal = document.querySelector('#exchange-trash-total');

      if (trashSpecificationValue === 'Kertas') {
        trashPrice.innerHTML = `Rp.${kertasPrice}`;
        exchangeTrashPrice.value = kertasPrice;
        const total = trashAmountValue * kertasPrice;
        exchangeTrashTotal.value = total;
        overlayTotal.innerHTML = `Rp. ${total}`;
        this.total = total;
        this.price = kertasPrice;
      } else if (trashSpecificationValue === 'Kardus') {
        trashPrice.innerHTML = `Rp.${kardusPrice}`;
        exchangeTrashPrice.value = kardusPrice;
        const total = trashAmountValue * kardusPrice;
        exchangeTrashTotal.value = total;
        overlayTotal.innerHTML = `Rp. ${total}`;
        this.total = total;
        this.price = kardusPrice;
      } else if (trashSpecificationValue === 'Kaleng') {
        trashPrice.innerHTML = `Rp.${kalengPrice}`;
        exchangeTrashPrice.value = kalengPrice;
        const total = trashAmountValue * kalengPrice;
        exchangeTrashTotal.value = total;
        overlayTotal.innerHTML = `Rp. ${total}`;
        this.total = total;
        this.price = kalengPrice;
      } else if (trashSpecificationValue === 'Botol Kaca') {
        trashPrice.innerHTML = `Rp.${botolKacaPrice}`;
        exchangeTrashPrice.value = botolKacaPrice;
        const total = trashAmountValue * botolKacaPrice;
        exchangeTrashTotal.value = total;
        overlayTotal.innerHTML = `Rp. ${total}`;
        this.total = total;
        this.price = botolKacaPrice;
      }
    });

    trashAmount.addEventListener('input', () => {
      const trashAmountValue = trashAmount.value;

      const overlayTrashAmountValue = document.querySelector('#overlay-jumlah');
      overlayTrashAmountValue.innerHTML = `${trashAmountValue} Kg`;

      const exchangeTrashPrice = document.querySelector('#exchange-trash-price');
      const exchangeTrashPriceValue = exchangeTrashPrice.value;

      const exchangeTrashTotal = document.querySelector('#exchange-trash-total');

      const total = trashAmountValue * exchangeTrashPriceValue;

      exchangeTrashTotal.value = total;

      overlayTotal.innerHTML = `Rp. ${total}`;

      this.amount = trashAmountValue;
      this.total = total;
    });

    // konfigurasi overlay sell
    const nameSell = document.querySelector('#name-sell');
    const addresSell = document.querySelector('#addres-sell');
    const phoneNumberSell = document.querySelector('#phone-number-sell');
    const trashAmountSell = document.querySelector('#trash-amount-sell');

    nameSell.addEventListener('input', () => {
      const overlayNameSell = document.querySelector('#overlay-name-sell');
      overlayNameSell.innerHTML = nameSell.value;
      this.name = nameSell.value;
    });

    addresSell.addEventListener('input', () => {
      const overlayAddresSell = document.querySelector('#overlay-addres-sell');
      overlayAddresSell.innerHTML = addresSell.value;
      this.addres = addresSell.value;
    });

    phoneNumberSell.addEventListener('input', () => {
      const overlayPhoneNumberSell = document.querySelector('#overlay-no-sell');
      overlayPhoneNumberSell.innerHTML = phoneNumberSell.value;
      this.phoneNumber = phoneNumberSell.value;
    });

    trashAmountSell.addEventListener('input', () => {
      const overlayJumlahSell = document.querySelector('#overlay-jumlah-sell');
      overlayJumlahSell.innerHTML = `${trashAmountSell.value} L`;

      const totalSell = document.querySelector('#total-sell');
      totalSell.value = trashAmountSell.value * 20000;

      const overlayTotalSell = document.querySelector('#overlay-total-sell');
      overlayTotalSell.innerHTML = `Rp.${trashAmountSell.value * 20000}`;

      this.amount = trashAmountSell.value;
      this.total = trashAmountSell.value * 20000;
    });

    // POST data yang di inputkan ke database

    // POST data Tukar Sampah
    const okeExchange = document.querySelector('#oke-exchange');
    okeExchange.addEventListener('click', () => {
      const urlTukar = 'https://sarang-bckend.vercel.app/tukar-sampah';
      const data = {
        nama: this.name,
        alamat: this.addres,
        no_telp: this.phoneNumber,
        jenis_sampah: this.trashSpecification,
        harga_per_kilo: this.price,
        jumlah_sampah: this.amount,
        total_harga: this.total,
      };

      fetch(urlTukar, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    });

    // POST data Jual Pupuk
    const okeSell = document.querySelector('#oke-sell');
    okeSell.addEventListener('click', () => {
      const urlJual = 'https://sarang-bckend.vercel.app/jual-pupuk';
      const data = {
        nama: this.name,
        alamat: this.addres,
        no_telp: this.phoneNumber,
        jumlah_pupuk: this.amount,
        harga_per_liter: this.pupukPrice,
        total_harga: this.total,
      };

      fetch(urlJual, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    });
  },

  // fungsi reset value
  resetValue() {
    this.name = '';
    this.addres = '';
    this.phoneNumber = '';
    this.trashSpecification = '';
    this.amount = '';
    this.price = '';
    this.total = '';
  },
};

export default Layanan;
