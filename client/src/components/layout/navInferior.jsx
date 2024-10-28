import styles from './navInferior.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navInferior{

    return(
    <footer className={styles.endereco}>
    <p>ViverBem+<br />Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
</footer>
)
}

export default navInferior;
