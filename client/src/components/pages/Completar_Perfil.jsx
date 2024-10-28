import React from 'react';
import styles from './Completar_Perfil.module.css';


function Completar_Perfil() {
    return (
        <div>
            <main>
                <div className={styles.container}>
                    <section className={styles.sessao}>
                        <h3 className={styles.h3}>Dados Pessoais:</h3>
                        <p><b className={styles.b5}>Nome Completo:</b> Luísa Heringer</p>
                        <p><b className={styles.b4}>Telefone:</b> (27) 9171-4986</p>
                        <p><b className={styles.b3}>Email:</b>luisaheringer@gmail.com</p>
                        <p><b className={styles.b2}>Data de nascimento:</b> 25/10/1998</p>
                        <p><b className={styles.b1}>Gênero:</b>Feminino</p>

                    </section>
                </div>
            </main>

            <main>


                <div className={styles.containers}>

                    <form>
                        <section className={styles.complete}>
                            <h2 className={styles.h2}>Complete seu perfil </h2>
                        </section>
                        <div className={styles.experiencia}>
                            <p><b className={styles.b6}>Quanto tempo de experiência você possui?*</b></p>
                            <input
                                type="text"
                                placeholder="Digite sua experiência"
                                className={styles.inputExperiencia}
                            />
                        </div>


                        <div className={styles.formacao}>
                            <p><b className={styles.b6}>Sua formação acadêmica:*</b></p>
                            <input
                                type="text"
                                placeholder="Digite sua formação..."
                                className={styles.inputFormacao}
                            />
                        </div>

                        <div className={styles.sobre}>
                            <p><b className={styles.b6}>Fale um pouco sobre você:*</b></p>
                            <input
                                type="text"
                                placeholder="Digite sobre você..."
                                className={styles.inputSobre}
                            />
                        </div>

                        <div className={styles.certificado}>
                            <p><b className={styles.b6}>Anexe seu certificado aqui:*</b></p>
                            <input
                                type="text"
                                placeholder="Seu certificado..."
                                className={styles.inputCertificado}
                            />
                        </div>
                    </form>
                </div>

                <div className={styles.caixa}>
                    <form>
                        <section className={styles.informacaoContato}>
                            <h2 className={styles.contato}>Contato</h2>
                        </section>
                        <div className={styles.email}>
                            <p className={styles.emailBorrado}>luisaheringer@gmail.com</p>
                        </div>
                        <div className={styles.telefone}>
                            <p className={styles.telefoneBorrado}>(27) 9 9999-2121</p>
                        </div>
                        <div className={styles.reservar}>
                            <p>Estou sempre em busca de novas
                            oportunidades. Entre em contato.</p>
                        </div>
                    </form>
                </div>
            </main>

            {/*<div className={styles.logo}>
                <img src="img/logo.png" alt="ViverBem+ Logo" />
            </div>*/}
        </div>
    );
}

export default Completar_Perfil;
