const Admin = {
  async render() {
    const main = document.querySelector('main');
    main.classList.add('reset-padding');

    return `
                <div class="admin">
                    <div class="sidebar">
                        <div class="wrap-admin-logo">
                            <div class="admin-logo"></div>
                            <h2>Hi, Admin</h2>
                        </div>
                        <hr>
                        <div class="nav">
                            <a id="table-exchange-button">Tukar Sampah</a>
                            <a id="table-sell-button">Jual Pupuk</a>
                            <a href="#/beranda">Keluar</a>
                        </div>
                    </div>
                    <div class="container-data-exchange">
                        <h1>Data Tukar Sampah</h1>
                        <table>
                            <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>No.telepon</th>
                            <th>Jenis Sampah</th>
                            <th>Jumlah Sampah</th>
                            <th>Harga Per Kilo</th>
                            <th>Kalkulasi Harga</th>
                            <th>Aksi</th>
                            </tr>
                            <tbody id="tabel-exchange"></tbody>
                        </table>
                    </div>
                    <div class="container-data-sell hide-content">
                        <h1>Data Jual Pupuk</h1>
                        <table>
                            <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>No.telepon</th>
                            <th>Jumlah Pupuk</th>
                            <th>Harga Per Liter</th>
                            <th>Kalkulasi Harga</th>
                            <th>Aksi</th>
                            </tr>
                            <tbody id="tabel-sell"></tbody>
                        </table>
                    </div>
                </div>
           `;
  },

  async afterRender() {
    // hide nav
    const navigasi = document.querySelector('nav');
    navigasi.classList.add('hide-content');

    // konfigurasi halaman
    const tabelDataExchange = document.querySelector('.container-data-exchange');
    const tabelDataSell = document.querySelector('.container-data-sell');

    const tableExchangeButton = document.querySelector('#table-exchange-button');
    const tableSellButton = document.querySelector('#table-sell-button');

    tableSellButton.addEventListener('click', () => {
      tabelDataExchange.classList.add('hide-content');
      tabelDataSell.classList.remove('hide-content');
    });

    tableExchangeButton.addEventListener('click', () => {
      tabelDataExchange.classList.remove('hide-content');
      tabelDataSell.classList.add('hide-content');
    });

    // konfigurasi tabel tukar sampah
    const tabelExchange = document.querySelector('#tabel-exchange');

    let exchangeValueAPI;

    function getApiExchangeValue() {
      const endpoint = 'https://sarang-bckend.vercel.app/tukar-sampah';
      return fetch(endpoint)
        .then((result) => result.json())
        .then((responseJson) => responseJson.hasil)
        .then((value) => {
          exchangeValueAPI = value; // Menyimpan nilai ke variabel global
          console.log(exchangeValueAPI);
        });
    }

    function renderTabelExchange() {
      exchangeValueAPI.forEach((element, index) => {
        const tr = document.createElement('tr');
        tabelExchange.appendChild(tr);

        const no = document.createElement('td');
        no.innerHTML = index + 1;
        tr.appendChild(no);

        const nama = document.createElement('td');
        nama.innerHTML = element.nama;
        tr.appendChild(nama);

        const alamat = document.createElement('td');
        alamat.innerHTML = element.alamat;
        tr.appendChild(alamat);

        const noTelp = document.createElement('td');
        noTelp.innerHTML = element.no_telp;
        tr.appendChild(noTelp);

        const jenisSampah = document.createElement('td');
        jenisSampah.innerHTML = element.jenis_sampah;
        tr.appendChild(jenisSampah);

        const jumlahSampah = document.createElement('td');
        jumlahSampah.innerHTML = `${element.jumlah_sampah} Kg`;
        tr.appendChild(jumlahSampah);

        const hargaPerKilo = document.createElement('td');
        hargaPerKilo.innerHTML = `Rp. ${element.harga_per_kilo}`;
        tr.appendChild(hargaPerKilo);

        const totalHarga = document.createElement('td');
        totalHarga.innerHTML = `Rp. ${element.total_harga}`;
        tr.appendChild(totalHarga);

        const aksi = document.createElement('td');
        const deleteButton = document.createElement('div');
        deleteButton.innerHTML = 'X';
        deleteButton.classList.add('delete');
        aksi.appendChild(deleteButton);
        tr.appendChild(aksi);
        deleteButton.addEventListener('click', () => {
          fetch(`https://sarang-bckend.vercel.app/tukar-sampah/${element._id}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Gagal menghapus tukar-sampah');
            })
            .then(() => {
              tabelExchange.innerHTML = '';
              getApiExchangeValue()
                .then(renderTabelExchange);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      });
    }

    getApiExchangeValue()
      .then(renderTabelExchange);

    // konfigurasi tabel Jual Pupuk
    const tabelSell = document.querySelector('#tabel-sell');

    let sellValueAPI;

    function getApiSellValue() {
      const endpoint = 'https://sarang-bckend.vercel.app/jual-pupuk';
      return fetch(endpoint)
        .then((result) => result.json())
        .then((responseJson) => responseJson.hasil)
        .then((value) => {
          sellValueAPI = value; // Menyimpan nilai ke variabel global
          console.log(sellValueAPI);
        });
    }

    function renderTabelSell() {
      sellValueAPI.forEach((element, index) => {
        const tr = document.createElement('tr');
        tabelSell.appendChild(tr);

        const no = document.createElement('td');
        no.innerHTML = index + 1;
        tr.appendChild(no);

        const nama = document.createElement('td');
        nama.innerHTML = element.nama;
        tr.appendChild(nama);

        const alamat = document.createElement('td');
        alamat.innerHTML = element.alamat;
        tr.appendChild(alamat);

        const noTelp = document.createElement('td');
        noTelp.innerHTML = element.no_telp;
        tr.appendChild(noTelp);

        const jumlahPupuk = document.createElement('td');
        jumlahPupuk.innerHTML = `${element.jumlah_pupuk} L`;
        tr.appendChild(jumlahPupuk);

        const hargaPerLiter = document.createElement('td');
        hargaPerLiter.innerHTML = `Rp. ${element.harga_per_liter}`;
        tr.appendChild(hargaPerLiter);

        const totalHarga = document.createElement('td');
        totalHarga.innerHTML = `Rp. ${element.total_harga}`;
        tr.appendChild(totalHarga);

        const aksi = document.createElement('td');
        const deleteButton = document.createElement('div');
        deleteButton.innerHTML = 'X';
        deleteButton.classList.add('delete');
        aksi.appendChild(deleteButton);
        tr.appendChild(aksi);
        deleteButton.addEventListener('click', (e) => {
          e.preventDefault();
          fetch(`https://sarang-bckend.vercel.app/jual-pupuk/${element._id}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Gagal menghapus jual-pupuk');
            })
            .then(() => {
              tabelSell.innerHTML = '';
              getApiSellValue()
                .then(renderTabelSell);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      });
    }

    getApiSellValue()
      .then(renderTabelSell);
  },
};

export default Admin;
