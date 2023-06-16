const LoginAdmin = {
  async render() {
    return `  <div class="wrap-admin">
                <div class="login-admin">
                    <div class="login-header">
                        <div class="logo"></div>
                        <h1>SARANG</h1>
                    </div>
                    <div class="login-body">
                        <form>
                            <label for="#username-admin">Username</label>
                            <input id="username-admin" type="text" required placeholder="Masukan Username">
                            <label for="#pass-admin">Password</label>
                            <input id="pass-admin" type="password" required placeholder="Masukan Password">
                        </form>
                        <button id="submit-admin">Masuk</button>
                        <p id="wrongName" class="hide-content">Username Salah!</p>
                        <p id="wrongPass" class="hide-content">Password Salah!</p>
                        <p id="wrongPassName" class="hide-content">Username Dan Password Salah!</p>
                    </div>
                </div>
              </div>

          `;
  },

  async afterRender() {
    // hide hamburger
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.add('hide-content');

    // hide nav
    const navigasi = document.querySelector('nav');
    navigasi.classList.add('hide-content');

    // konfigurasi inputan
    const username = document.querySelector('#username-admin');
    const password = document.querySelector('#pass-admin');
    const button = document.querySelector('#submit-admin');

    const wrongName = document.querySelector('#wrongName');
    const wrongPass = document.querySelector('#wrongPass');
    const wrongPassName = document.querySelector('#wrongPassName');

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      if (username.value !== 'admin' && password.value === '12345') {
        wrongName.classList.remove('hide-content');
        wrongPass.classList.add('hide-content');
        wrongPassName.classList.add('hide-content');
      } else if (username.value === 'admin' && password.value !== '12345') {
        wrongName.classList.add('hide-content');
        wrongPass.classList.remove('hide-content');
        wrongPassName.classList.add('hide-content');
      } else if (username.value !== 'admin' && password.value !== '12345') {
        wrongName.classList.add('hide-content');
        wrongPass.classList.add('hide-content');
        wrongPassName.classList.remove('hide-content');
      } else {
        window.location.href = '#/admin';
      }
    });
  },
};

export default LoginAdmin;
