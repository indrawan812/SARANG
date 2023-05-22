import 'regenerator-runtime';
import '../styles/beranda.css';
import '../styles/kelolaSampah.css';
import App from './views/app';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
