const KelolaSampah = {
  async render() {
    return `
          <div class="jumbtrone-kelolaSampah">
              <div class="jumbtrone-kelolaSampah-image"></div>
              <div class="jumbtrone-kelolaSampah-txt">
                  <h2>Kelola Sampah Anda</h2>
                  <p>Jangan biarkan sampah menumpuk, kelola dengan baik untuk masa depan yang cerah.</p>
              </div>
          </div>
          <div class="info-kelolaSampah">
              <h2>Kelola Sampah Organik</h2>
              <hr>
              <p class="underscore">Pupuk Kompos</p>
              <ul>
                  <li>Pilihlah tempat yang terpisah di halaman rumah Anda untuk mengumpulkan sampah organik seperti sisa makanan, daun kering, dan potongan tanaman</li>
                  <li>Giling atau potong bahan organik tersebut menjadi potongan kecil agar lebih cepat terurai. Campurkan bahan organik tersebut dengan sedikit tanah dan air.</li>
                  <li>Biarkan kompos terurai secara alami, dan dalam beberapa bulan, Anda akan memiliki kompos yang kaya akan nutrisi untuk tanaman.</li>
              </ul>
              <p class="underscore">Pupuk Cair</p>
              <p>Campurkan sampah organik dengan air dalam wadah tertutup dan biarkan selama beberapa minggu. Saring campuran tersebut dan gunakan air hasil saringan sebagai pupuk cair untuk tanaman.</p>
          </div>
        `;
  },

  async afterRender() {
    console.log('kelola sampah');
  },
};

export default KelolaSampah;
