import styles from './navInferior.module.css';
import React from 'react';
import email from '../pages/imagens/email.png';
import insta from '../pages/imagens/716dcf3f-b8e2-4a69-9fdc-d8060c9edba0.png';

function navInferior() {
  return (
    <section className={styles.rod}>
      <div className={styles.containerIV}>
        <h1 className={styles.rodape}>ViverBem+</h1>
        <p style={{ fontWeight: '100'}}>"Cuidar de quem nos cuidou é um ato de amor."</p>
        <p style={{ marginBottom: '-1%' }}>viverbemmais@gmail.com <img src={email} alt="" style={{ width: '20px', height: '20px', marginLeft: '5px' }} /> </p>
        <p>@viverbemmais_ <img src={insta} alt="" style={{ width: '20px', height: '20px', marginLeft: '5px' }} /> </p>
      </div>
    </section>
  );
};

export default navInferior;