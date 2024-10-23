import React from "react";
import styles from './Login_Princ.module.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const menuShow = () => {
    // Defina aqui a função de mostrar/ocultar o menu mobile
    console.log("Menu toggled");
  };

  return (
    <div className={styles.tudo}>
      <header>
        <nav className= {styles.nav_bar}>
          <div className={styles.logo}>
            <h1>ViverBem+</h1>
          </div>
          <div className={styles.nav_list}>
            <ul>
              <li className={styles.nav_item}>
                <a href="#" className="nav-link">Página inicial</a>
              </li>
              <li className={styles.nav_item}>
                <a href="#" className="nav-link">Login</a>
              </li>
            </ul>
          </div>

          <div className={styles.mobile_menu_icon}>
            <button onClick={menuShow}>
              <img className="icon" src="assets/img/menu_white_36dp.svg" alt="Menu" />
            </button>
          </div>
        </nav>

        <div className={styles.mobile_menu}>
          <ul>
            <li className={styles.nav_item}>
              <a href="#" className="nav-link">Página inicial</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_item}>Login</a>
            </li>
          </ul>
        </div>
      </header>

      <div className={styles.logo_viver}>
        <img src="img/LOGO_VIVER_BEM_+_2-removebg-preview (1).png" alt="Logo ViverBem+" className="logo-form" />
      </div>

      <main>
        <section className={styles.login_section}>
          <img src="img/velho-mulher.novo.png" alt="Idoso e profissional" className="main-image" />
          <div className={styles.form_container}>
            <form>
              <h2>Vamos começar!</h2>
              <label htmlFor="cpf">CPF *</label>
              <input type="text" id="cpf" name="cpf" required />

              <label htmlFor="senha">Senha *</label>
              <input type="password" id="senha" name="senha" required />

              <div className={styles.button_group}>
                <button type="submit" className="btn">Cliente</button>
                <button type="submit" className="btn">Profissional</button>
              </div>

              <a href="#" className={styles.register_link}>Cadastre-se</a>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.endereco}>
        <p>ViverBem+<br />Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
      </footer>
    </div>
  );
}

export default App;
