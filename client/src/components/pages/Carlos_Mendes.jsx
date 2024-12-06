import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import stylesP from './Carlos_Mendes.module.css';
import profilePic from '../pages/imagens/carlosmendes.jpg';
import NavInferior from '../layout/navInferior';
import email from '../pages/imagens/email.png';
import coin from '../pages/imagens/coin.png';
import React, { useState } from 'react';
import NavBar from '../layout/navBar';


function Profissional() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuShow = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div style={{ backgroundColor: '#c2c2f8', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <section className={stylesP.intro}>
                <div className={stylesP.containerI}>
                    <img src={profilePic} alt="Carlos Mendes" className={stylesP.profilePic} />
                    <div className={stylesP.introText}>
                        <h1 style={{
                            color: '#23008D',
                            marginLeft: '8.5%',
                            fontSize: '30px',
                            marginBottom: '20px'
                        }}><b>Olá, eu sou o Carlos Mendes.</b></h1>
                        <p className={stylesP.introText_p}>
                            <p className={stylesP.pI}>Meu nome é Carlos Mendes, há 3 anos, dedico parte da minha vida ao cuidado dos idosos.</p>
                            <p className={stylesP.pII}>A minha motivação diária vem do carinho e respeito que nutro pelos idosos, sempre buscando</p>
                            <p className={stylesP.pIII}>proporcionar um ambiente seguro e acolhedor para cada um dos meus queridos pacientes.</p>
                            <p className={stylesP.pIV}>Acredito que, por meio de uma escuta atenta e de cuidados personalizados, conseguimos</p>
                            <p className={stylesP.pV}>garantir a dignidade e o conforto que eles merecem, sem nunca perder de vista</p>
                            <p className={stylesP.pVI}>o afeto e a paciência que fazem parte do meu trabalho.</p>
                        </p>
                    </div>
                </div>
            </section>

            <section className={stylesP.about}>
                <div className={stylesP.containerII}>
                    <div className={stylesP.desenvol}>
                        <strong><h3 style={{
                            fontSize: '30px',
                            marginLeft: '90px',
                            marginBottom: '-10px'
                        }}><b>Sobre mim:</b></h3></strong>
                        <p>ﾠ</p>
                        <p className={stylesP.pI}>Experiência Profissional: Cuidador de Idosos e Enfermeiro.</p>
                        <p className={stylesP.pII}>Cuidador e enfermeiro dedicado ao bem-estar de idosos (2018).</p>
                        <p className={stylesP.pIII}>Nos últimos 6 anos, atuei como cuidador e enfermeiro para idosos em diferentes contextos,</p>
                        <p className={stylesP.pIV}>incluindo acompanhamento de pacientes com condições de saúde complexas. Minhas responsabilidades incluíam:</p>
                        <ul style={{
                            marginLeft: '90px'
                        }}>
                            <p>ﾠ</p>
                            <li>Assistência nas atividades diárias</li>
                            <li>Administração de medicamentos e controle de horários</li>
                            <li>Estimulação física e cognitiva</li>
                            <li>Acompanhamento em consultas médicas</li>
                            <li>Suporte emocional e social</li>
                            <li>Planejamento e execução de cuidados personalizados</li>
                        </ul>
                        <p>ﾠ</p>
                        <p className={stylesP.pIII}>Minha jornada profissional me proporcionou uma visão abrangente do cuidado humanizado e</p>
                        <p className={stylesP.pIII}>da importância de criar um ambiente seguro e acolhedor, garantindo qualidade de vida</p>
                        <p className={stylesP.pIII}>aos idosos que confiam em mim para cuidar de sua saúde e bem-estar.</p>
                    </div>
                </div>
            </section>

            <section className={stylesP.cont}>
                <div className={stylesP.containerIII}>
                    <h1 className={stylesP.ato}><b>Contatos:</b></h1>
                    <p style={{ fontSize: '18px' }}><img src={email} alt="email" className={stylesP.email} /><strong style={{
                        color: '#23008D',
                        marginLeft: '2%',
                    }}>Email:</strong> carlosmendes@gmail.com</p>
                    <p style={{ fontSize: '18px' }}><img src={telephone} alt="telephone" className={stylesP.telephone} /><strong style={{
                        color: '#23008D',
                        marginLeft: '2%',
                        fontSize: '18px',
                    }}>Telefone:</strong> (27) 96392-3456</p>
                    <h1 style={{ fontSize: '30px', marginLeft: '60%', marginTop: '-12%' }}><b>Diária:</b></h1>
                    <img style={{ height: '35px', width: '35px', marginLeft: '45%', marginTop: '2%' }} src={coin} alt="telephone" />
                    <p style={{
                        marginLeft: '62.2%',
                        fontSize: '18px',
                        marginTop: '-2.6%'
                    }}>R$ 179,90</p>
                </div>
            </section>
            <NavInferior />
        </div>
    );
}

export default Profissional;