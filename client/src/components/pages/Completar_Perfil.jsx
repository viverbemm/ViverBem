import React from 'react';
import styles from './Completar_Perfil.module.css';


function Completar_Perfil() {
    return (
        <div>
            <main>
                <div className={styles.container}>
                    <section className={styles.section}>
                        <h3>Dados Pessoais:</h3>
                        <p className={styles.p8}>Nome Completo: Luísa Heringer</p>
                        <p className={styles.p1}>Telefone: (27) 9171-4986</p>
                        <p className={styles.p2}>Email: luisaheringer@gmail.com</p>
                        <p className={styles.p3}>Data de nascimento: 25/10/1998</p>
                        <p className={styles.p4}>Fisioterapia e exercícios</p>
                        <p className={styles.p5}>Suporte emocional</p>
                        <p className={styles.p6}>Coordenação com profissionais de saúde</p>
                        <p className={styles.p7}>Essa experiência não apenas aprimorou minhas habilidades práticas, mas também reforçou minha compreensão da importância do cuidado holístico e individualizado para idosos que enfrentam condições de saúde complexas.</p>

                    </section>
                </div>
            </main>
            <div className={styles.logo}>
                <img src="img/logo.png" alt="ViverBem+ Logo" />
            </div>
        </div>
    );
}

export default Completar_Perfil;
