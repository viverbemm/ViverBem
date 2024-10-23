import React, { useState } from 'react';
import styles from './Menu_superior.module.css';
import { useNavigate } from 'react-router-dom';


const MenuSuperior = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuShow = () => {
        setMenuOpen(!menuOpen); // Alterna o estado do menu (abre/fecha)
    };

    return (
        <header>
            <nav className={styles.nav_bar}>
                <div className={styles.logo}>
                    <h1>ViverBem+</h1>
                </div>
                <div className={styles.nav_list}>
                    <ul>
                        <li className={styles.nav_item}>
                            <a href="#" className={styles.nav_link}>Página inicial</a>
                        </li>
                        <li className={styles.nav_item}>
                            <a href="#" className={styles.nav_link}>Login</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.mobile_menu_icon}>
                    <button onClick={menuShow}>
                        <img className="icon" src="assets/img/menu_white_36dp.svg" alt="Menu" />
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobile_menu} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li className={styles.nav_item}>
                        <a href="#" className={styles.nav_link}>Página inicial</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#" className={styles.nav_link}>Login</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default MenuSuperior;
