const Beranda = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `
            <div class="jumbtrone">
                <div class="jumbtrone-text">
                    <h2>Ciptakan lingkungan yang bersih dan<br>sehat bersama Sampah Terang</h2>
                    <p>Belajar mengelola sampah agar lingkungan terbebas dari kuman dan penyakit.<br>Sampah Terang membantu mengelola sampah organik dengan mudah.</p>
                </div>
                <div class="jumbtrone-image"></div>
            </div>
            <div class="benefit">
                <h2>Keuntungan Daur Ulang Sampah</h2>
                <hr>
                <div class="info-group">
                    <div class="info-wrap">
                        <div class="number">1</div>
                        <p><span>Mengurangi Jumlah Sampah.</span><br>Daur ulang sampah dapat mengurangi jumlah sampah yang dikirim ke tempat pembuangan akhir.</p>
                    </div>
                    <div class="info-wrap">
                        <div class="number">2</div>
                        <p><span>Menghemat Sumber Daya.</span><br>Daur ulang dapat menghambat sumber daya alam seperti air, kayu, dan minyak.</p>
                    </div>
                    <div class="info-wrap">
                        <div class="number">3</div>
                        <p><span>Mengurangi Emisi Gas Rumah Kaca.</span><br>Saat sampah diolah di tempat pembuangan akhir, terjadi proses dekomposisi yang menghasilkan gas metana yang berkontribusi terhadap pemanasan global.</p>
                    </div>
                    <div class="info-wrap">
                        <div class="number">4</div>
                        <p><span>Membuat Produk Baru.</span><br>Sampah yang diolah kembali dapat digunakan untuk membuat produk baru seperti tas, baju, atau hiasan dinding.</p>
                    </div>
                </div>
            </div>
            <div class="trash">
                <h2>Jenis - Jenis Sampah</h2>
                <hr>
                <div class="trash-group">
                    <div class="trash-wrap">
                        <div class="trash-image"></div>
                        <p><span>Sampah organik</span><br>Sampah organik adalah jenis sampah yang terbuat dari bahan-bahan organik seperti sisa makanan, daun, rumput, dan kayu.</p>
                    </div>
                    <div class="trash-wrap">
                        <p><span>Sampah Anorganik</span><br>Sampah anorganik adalah jenis sampah yang terbuat dari bahan-bahan anorganik seperti plastik, kardus, kaleng, dan botol kaca.</p>
                        <div class="trash-image"></div>
                    </div>
                    <div class="trash-wrap">
                        <div class="trash-image"></div>
                        <p><span>Sampah B3</span><br>Sampah B3 adalah jenis sampah yang mengandung bahan berbahaya dan beracun seperti limbah elektronik, baterai, obat-obatan, dan pestisida.</p>
                    </div>
                </div>
            </div>
      `;
  },

  async afterRender() {
    const navigasi = document.querySelector('nav');
    navigasi.classList.remove('hide-content');
  },
};

export default Beranda;
