import styles from './navInferior.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navInferior() {
  return (
    <section className={styles.rod}>
      <div className={styles.containerIV}>
        <h1 className={styles.rodape}>ViverBem+</h1>
        <p style={{ fontWeight: '100' }}>"Cuidar de quem nos cuidou é um ato de amor."</p>
        <p>viverbemmais@gmail.com</p>
        <p>@viverbemmais_</p>
      </div>
    </section>
  );
};

export default navInferior;
