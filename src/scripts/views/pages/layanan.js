const Layanan = {
  async render() {
    return `
            <div class="jumbtrone-layanan">
              <div class="jumbtrone-layanan-image"></div>
                <div class="jumbtrone-layanan-txt">
                  <h2>Melayani Pengelolaan Sampah</h2>
                  <p>Setiap langkah kecil dalam pengelolaan sampah sangat berarti. Kami siap menjadi mitra Anda dalam mengurangi, mendaur ulang, dan memanfaatkan sampah secara bertanggung jawab.</p>
                  <a href="#/formLogin">
                    <button>Tukar Sampah</button>
                  </a>
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
              <p>Campurkan sampah organik dengan air dalam wadah tertutup dan biarkan selama beberapa minggu. Saring campuran tersebut dan gunakan air hasil saringan sebagai pupuk cair untuk tanaman.</p>
            </div>
        `;
  },

};

export default Layanan;
