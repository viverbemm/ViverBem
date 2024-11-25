import styles from './navInferior.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navInferior() {
  return (
    <section className={styles.rod}>
      <div className={styles.containerIV}>
        <h1 className={styles.rodape}>ViverBem+</h1>
        <p style={{ fontWeight: '100' }}>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha - ES.</p>
        <p style={{ marginTop: '-1.5%' }}>viverbemmais@gmail.com</p>
      </div>
    </section>
  );
};

export default navInferior;
