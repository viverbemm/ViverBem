import styles from './navInferior.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navInferior() {
  return (
    <div className={styles.end}>
      <h1>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha-ES</h1>
    </div>
  );
};

export default navInferior;
