const formLogin = {
  async render() {
    return `
            <div class="container-login">
                <div class="login-card">
                    
                    <div class="login-card-header">
                      <div class="card-logo">                    
                        <div class="card-logo-wrap"></div>  
                        <p>SARANG</p>
                      </div>
                    </div>

                    <div class="login-card-body">
                      <form id="loginForm">
                        <label for="username">Email</label>
                        <input type="text" id="username" name="username" required>
                        <label for="password">Kata Sandi</label>
                        <input type="password" id="password" name="password" required>
                        <a href"#/lupasandi">Lupa Sandi?</a>
                        <button type="submit" class="btn-login">MASUK</button>
                        <p>Belum punya akun? <a href"#/lupasandi">Daftar sekarang!</a></p>
                      </form>
                    </div>
                </div>                
            </div>
      `;
  },

};

export default formLogin;
