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
              <p class="underscore">Mengolah Sampah Menjadi Pupuk Kompos Cair</p>
              <p>
                Dengan mengolah sampah organik menjadi pupuk kompos cair, kita dapat mengurangi dampak negatif sampah terhadap lingkungan karena dengan menggunakan pupuk kompos cair dari sampah organik, kita tidak hanya mengurangi jumlah sampah di tempat pembuangan akhir, tetapi juga memanfaatkannya untuk menghasilkan sesuatu yang bernilai dan ramah lingkungan.
              </p>
              <p>
                Penasaran dengan cara membuatnya? Yuk simak video di bawah ini
              </p>
              <div class="video-wraper">
                <iframe src="https://www.youtube.com/embed/Cm8nn1mnX_Q"></iframe>
              </div>
          </div>
        `;
  },

  async afterRender() {
    console.log('kelola sampah');
  },
};

export default KelolaSampah;
