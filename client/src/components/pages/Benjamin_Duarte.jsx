import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import stylesP from './Benjamin_Duarte.module.css';
import profilePic from '../pages/imagens/benjamin.webp';
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
                    <img src={profilePic} alt="Benjamin Duarte" className={stylesP.profilePic} />
                    <div className={stylesP.introText}>
                        <h1 style={{
                            color: '#23008D',
                            marginLeft: '9%',
                            fontSize: '30px',
                            marginBottom: '20px'
                        }}><b>Olá, eu sou o Benjamin Duarte.</b></h1>
                        <p className={stylesP.introText_p}>
                            <p className={stylesP.pI}>Meu nome é Benjamin Duarte, sou cuidador de idosos e, há 6 meses, tenho dedicado</p>
                            <p className={stylesP.pII}>minha jornada ao cuidado de pessoas idosas com foco no bem-estar e conforto.</p>
                            <p className={stylesP.pIII}>Acredito que o cuidado deve ser holístico e individualizado, tratando não apenas das</p>
                            <p className={stylesP.pIV}>necessidades físicas, mas também emocionais e psicológicas. Meu maior objetivo é garantir</p>
                            <p className={stylesP.pV}>qualidade de vida para cada idoso sob meus cuidados, promovendo autonomia e felicidade.</p>
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
                        <p className={stylesP.pI}>Experiência Profissional: Cuidador de Idosos.</p>
                        <p className={stylesP.pII}>Cuidador autônomo com foco em cuidados personalizados e assistenciais para idosos (2023-presente).</p>
                        <p className={stylesP.pIII}>Com 6 meses de experiência, atuei como cuidador autônomo, prestando cuidados diretos a idosos com necessidades,</p>
                        <p className={stylesP.pIV}>incluindo acompanhamento de saúde, higiene pessoal, e suporte emocional. Minhas responsabilidades incluem:</p>
                        <ul style={{
                            marginLeft: '90px'
                        }}>
                            <p>ﾠ</p>
                            <li>Assistência nas atividades diárias, como banho, alimentação e mobilidade</li>
                            <li>Gestão de medicamentos e acompanhamento de tratamentos médicos</li>
                            <li>Estimulação cognitiva com atividades recreativas e de socialização</li>
                            <li>Planejamento de exercícios físicos adaptados à saúde do idoso</li>
                            <li>Apoio emocional e psicológico, criando um ambiente seguro e acolhedor</li>
                            <li>Coordenação com médicos e outros profissionais de saúde</li>
                        </ul>
                        <p>ﾠ</p>
                        <p className={stylesP.pIII}>Essa experiência tem me proporcionado uma visão mais profunda sobre o cuidado integral e individualizado que</p>
                        <p className={stylesP.pIII}>cada idoso necessita, reforçando minha habilidade em lidar com diferentes desafios e necessidades específicas,</p>
                        <p className={stylesP.pIII}>sempre com muito respeito e dedicação ao bem-estar deles.</p>
                    </div>
                </div>
            </section>


            <section className={stylesP.cont}>
                <div className={stylesP.containerIII}>
                    <h1 className={stylesP.ato}><b>Contatos:</b></h1>
                    <p style={{ fontSize: '18px' }}><img src={email} alt="email" className={stylesP.email} /><strong style={{
                        color: '#23008D',
                        marginLeft: '2%',
                    }}>Email:</strong> benjaminduarte@gmail.com</p>
                    <p style={{ fontSize: '18px' }}><img src={telephone} alt="telephone" className={stylesP.telephone} /><strong style={{
                        color: '#23008D',
                        marginLeft: '2%',
                        fontSize: '18px',
                    }}>Telefone:</strong> (27) 97689-2345</p>
                    <h1 style={{ fontSize: '30px', marginLeft: '60%', marginTop: '-11%' }}><b>Diária:</b></h1>
                    <img style={{ height: '35px', width: '35px', marginLeft: '45%', marginTop: '1.5%' }} src={coin} alt="telephone" />
                    <p style={{
                        marginLeft: '62.2%',
                        fontSize: '18px',
                        marginTop: '-2.4%'
                    }}>R$ 190,45</p>
                </div>
            </section>
            <NavInferior />
        </div>
    );
}


export default Profissional;