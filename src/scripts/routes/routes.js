import Beranda from '../views/pages/beranda';
import KelolaSampah from '../views/pages/kelolaSampah';
import Layanan from '../views/pages/layanan';
import TentangKami from '../views/pages/tentangKami';
import BuktiTransaksiTukar from '../views/pages/buktiTransaksiTukar';
import BuktiTransaksiJual from '../views/pages/buktiTransaksiJual';
import LoginAdmin from '../views/pages/loginAdmin';
import Admin from '../views/pages/admin';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/kelola-sampah': KelolaSampah,
  '/layanan': Layanan,
  '/tentang-kami': TentangKami,
  '/bukti-transaksi-tukar': BuktiTransaksiTukar,
  '/bukti-transaksi-jual': BuktiTransaksiJual,
  '/login-admin': LoginAdmin,
  '/admin': Admin,
};

export default routes;
