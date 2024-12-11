import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import profilePic from '../pages/imagens/maite.webp';
import stylesP from './Maite_Vieira.module.css';
import NavInferior from '../layout/navInferior';
import email from '../pages/imagens/email.png';
import coin from '../pages/imagens/coin.png';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from '../layout/navBar';

function Profissional() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuShow = () => {
        setMenuOpen(!menuOpen);
    };
    const { nome } = useParams();

    return (
        <div style={{ backgroundColor: '#c2c2f8', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <section className={stylesP.intro}>
                <div className={stylesP.containerI}>
                    <img src={profilePic} alt="Maitê Vieira" className={stylesP.profilePic} />
                    <div className={stylesP.introText}>
                        <h1 style={{
                            color: '#23008D',
                            marginLeft: '9%',
                            fontSize: '30px',
                            marginBottom: '20px'
                        }}><b>Olá, eu sou a Maitê Vieira.</b></h1>
                        <p className={stylesP.introText_p}>
                            <p className={stylesP.pI}>Meu nome é Maitê Vieira, sou cuidadora de idosos e estou na profissão há 9 meses.</p>
                            <p className={stylesP.pII}>Minha motivação para seguir essa carreira vem do meu profundo respeito e carinho</p>
                            <p className={stylesP.pIII}>pelos idosos, buscando sempre oferecer cuidados que garantam a qualidade de vida</p>
                            <p className={stylesP.pIV}>e o bem-estar. Tenho como objetivo proporcionar não apenas cuidados físicos, mas</p>
                            <p className={stylesP.pV}>também emocionais, ajudando a promover dignidade em cada fase da vida do idoso.</p>
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
                        <p className={stylesP.pI}>Experiência Profissional: Cuidadora de Idosos.</p>
                        <p className={stylesP.pII}>Cuidadora autônoma com experiência em cuidados personalizados para idosos (2023-presente).</p>
                        <p className={stylesP.pIII}>Durante os últimos 9 meses, tenho trabalhado como cuidadora autônoma, oferecendo assistência direta</p>
                        <p className={stylesP.pIV}>e apoio a idosos com diversas necessidades de saúde, focando sempre no bem-estar, na segurança e</p>
                        <p className={stylesP.pIV}>no conforto deles. Minhas principais responsabilidades incluem:</p>
                        <ul style={{
                            marginLeft: '90px'
                        }}>
                            <p>ﾠ</p>
                            <li>Auxílio nas atividades diárias, como higiene pessoal e alimentação</li>
                            <li>Administração de medicações e acompanhamento de tratamentos médicos</li>
                            <li>Promoção de atividades de estimulação cognitiva e física</li>
                            <li>Oferecer suporte emocional, garantindo um ambiente acolhedor e seguro</li>
                            <li>Apoio psicológico e social, mantendo o idoso conectado com sua família e comunidade</li>
                            <li>Coordenação com outros profissionais de saúde para garantir o melhor cuidado possível</li>
                        </ul>
                        <p>ﾠ</p>
                        <p className={stylesP.pIII}>Essa experiência tem me permitido aprimorar minhas habilidades práticas, ao mesmo tempo em que</p>
                        <p className={stylesP.pIII}>aprendo a importância do cuidado holístico, onde cada idoso é tratado com a atenção que merece,</p>
                        <p className={stylesP.pIII}>respeitando suas necessidades físicas, emocionais e sociais.</p>
                    </div>
                </div>
            </section>


            <section className={stylesP.cont}>
                <div className={stylesP.containerIII}>
                    <h1 className={stylesP.ato}><b>Contatos:</b></h1>
                    <p style={{ fontSize: '18px' }}><img src={email} alt="email" className={stylesP.email} /><strong style={{
                        color: '#23008D',
                        marginLeft: '2%',
                    }}>Email:</strong> maitevieira@gmail.com</p>
                    <p style={{ fontSize: '18px' }}><img src={telephone} alt="telephone" className={stylesP.telephone} /><strong style={{
                        color: '#23008D',
                        marginLeft: '2%',
                        fontSize: '18px',
                    }}>Telefone:</strong> (27) 93434-3456</p>
                    <h1 style={{ fontSize: '30px', marginLeft: '60%', marginTop: '-12.5%' }}><b>Diária:</b></h1>
                    <img style={{ height: '35px', width: '35px', marginLeft: '45%', marginTop: '2%' }} src={coin} alt="telephone" />
                    <p style={{
                        marginLeft: '62.2%',
                        fontSize: '18px',
                        marginTop: '-2.2%'
                    }}>R$ 169,50</p>
                </div>
            </section>
            <NavInferior />
        </div>
    );
}


export default Profissional;