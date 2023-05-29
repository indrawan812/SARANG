import 'regenerator-runtime';
import '../styles/beranda.css';
import '../styles/kelolaSampah.css';
import '../styles/layanan.css';
import '../styles/tentangKami.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

// window.addEventListener('load', () => {
//   app.renderPage();
// });
