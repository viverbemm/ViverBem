import React, { useState } from 'react';
import profilePic from '../pages/imagens/luisa.webp';
import stylesM from './Menu_superior.module.css';
import profileMenu from './assets/img/menu_white_36dp.svg';
import stylesP from './Tela.Pagamentos.module.css';

function Pagamento() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expirationDate: '',
        cvv: '',
    });
    const [erros, setErros] = useState({
        cardNumber: '',
        cardName: '',
        expirationDate: '',
        cvv: '',
    });

    const menuShow = () => {
        setMenuOpen(!menuOpen);
    };

    // Função para validar o formulário
    const validarFormulario = () => {
        let valid = true;
        const novosErros = {};

        // Validando o número do cartão (deve ser um número de 16 dígitos)
        const regexCardNumber = /^\d{16}$/;
        if (!regexCardNumber.test(formData.cardNumber)) {
            novosErros.cardNumber = 'Número do cartão inválido. Deve conter 16 dígitos.';
            valid = false;
        }

        // Validando o nome no cartão (não pode estar vazio)
        if (formData.cardName.trim() === '') {
            novosErros.cardName = 'O nome no cartão é obrigatório.';
            valid = false;
        }

        // Validando a validade (deve ser no formato MM/AAAA)
        const regexExpirationDate = /^(0[1-9]|1[0-2])\/\d{4}$/;
        if (!regexExpirationDate.test(formData.expirationDate)) {
            novosErros.expirationDate = 'Formato inválido. Use MM/AAAA.';
            valid = false;
        }

        // Validando o CVV (deve ser um número de 3 dígitos)
        const regexCvv = /^\d{3}$/;
        if (!regexCvv.test(formData.cvv)) {
            novosErros.cvv = 'CVV inválido. Deve conter 3 dígitos.';
            valid = false;
        }

        setErros(novosErros);
        return valid;
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            // Se todos os campos forem válidos, faça o pagamento (lógica aqui)
            console.log('Pagamento efetuado!');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div style={{ backgroundColor: '#E6E6FA', width: '100vw', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className={stylesP.container}>
                <header className={stylesP.header}>
                    <nav className={stylesM.nav_bar}>
                        <div className={stylesM.logo}>
                            <h1>ViverBem+</h1>
                        </div>
                        <div className={stylesM.nav_list}>
                            <ul>
                                <li className={stylesM.nav_item}>
                                    <a className={stylesM.nav_link}>Página inicial</a>
                                </li>
                                <li className={stylesM.nav_item}>
                                    <a className={stylesM.nav_link}>Login</a>
                                </li>
                            </ul>
                        </div>
                        <div className={stylesM.mobile_menu_icon}>
                            <button onClick={menuShow}>
                                <img src={profileMenu} alt="Menu Icon" />
                            </button>
                        </div>
                    </nav>

                    <div className={`${stylesM.mobile_menu} ${menuOpen ? stylesM.open : ''}`}>
                        <ul>
                            <li className={stylesM.nav_item}>
                                <a href="#" className={stylesM.nav_link}>Página inicial</a>
                            </li>
                            <li className={stylesM.nav_item}>
                                <a href="#" className={stylesM.nav_link}>Login</a>
                            </li>
                        </ul>
                    </div>
                </header>

                <section className={stylesP.main}>
                    <div className={stylesP.profileContainer}>
                        <img src={profilePic} alt="Luísa Heringer" className={stylesP.profileImage} />
                        <div className={stylesP.profileInfo}>
                            <h2 className={stylesP.profileName}>Luísa Heringer</h2>
                            <h3 className={stylesP.servicesTitle}>Serviços oferecidos:</h3>
                            <ul className={stylesP.servicesList}>
                                <li>Assistência diária</li>
                                <li>Gerenciamento de sintomas</li>
                                <li>Estimulação cognitiva</li>
                                <li>Fisioterapia e exercícios</li>
                                <li>Suporte emocional</li>
                                <li>Coordenação com profissionais de saúde</li>
                            </ul>
                        </div>
                    </div>

                    <div className={stylesP.reservationInfo}>
                        <h3 className={stylesP.sectionTitle}>Informações da Reserva</h3>
                        <div className={stylesP.reservationDetails}>
                            <div className={stylesP.reservationDates}>
                                <p><strong>Check-in:</strong> 05/08/2024</p>
                                <p><strong>Checkout:</strong> 09/08/2024</p>
                            </div>
                            <div className={stylesP.reservationCosts}>
                                <p><strong>R$ 150 x 5 DIÁRIAS</strong> = R$ 750,00</p>
                                <p><strong>Taxa de serviço do ViverBem+</strong> = R$ 156,00</p>
                                <p><strong>Total:</strong> R$ 906,00</p>
                            </div>
                        </div>
                        <p className={stylesP.paymentInfo}>
                            Após a confirmação do pagamento via cartão de crédito, você será automaticamente direcionado para a página do profissional.
                        </p>
                    </div>

                    <div className={stylesP.paymentSection}>
                        <h3 className={stylesP.sectionTitle}>Pagamento</h3>
                        <div className={stylesP.creditCardInfo}>
                            <p>Cartão de crédito em até 12x:</p>
                            <img src="https://via.placeholder.com/300x50" alt="Cartões aceitos" className={stylesP.paymentMethods} />
                        </div>
                        <form className={stylesP.paymentForm} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Número do cartão"
                                className={stylesP.input}
                                value={formData.cardNumber}
                                onChange={handleChange}
                            />
                            {erros.cardNumber && <p className={stylesP.error}>{erros.cardNumber}</p>}
                            <input
                                type="text"
                                name="cardName"
                                placeholder="Nome que consta no cartão"
                                className={stylesP.input}
                                value={formData.cardName}
                                onChange={handleChange}
                            />
                            {erros.cardName && <p className={stylesP.error}>{erros.cardName}</p>}
                            <input
                                type="text"
                                name="expirationDate"
                                placeholder="Validade (MM/AAAA)"
                                className={stylesP.input}
                                value={formData.expirationDate}
                                onChange={handleChange}
                            />
                            {erros.expirationDate && <p className={stylesP.error}>{erros.expirationDate}</p>}
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                className={stylesP.input}
                                value={formData.cvv}
                                onChange={handleChange}
                            />
                            {erros.cvv && <p className={stylesP.error}>{erros.cvv}</p>}
                            <button type="submit" className={stylesP.button}>Efetuar Pagamento</button>
                        </form>
                    </div>

                    <div className={stylesP.contactSection}>
                        <h3 className={stylesP.sectionTitle}>Contato</h3>
                        <p>Email: <a href="mailto:luisaheringer@gmail.com">luisaheringer@gmail.com</a></p>
                        <p>Telefone: (27) 99999-2121</p>
                        <p>Estou sempre em busca de novas oportunidades. Entre em contato.</p>
                    </div>
                </section>

                <h1 className={stylesP.rodape}>ViverBem+</h1>
                <p className={stylesP.controd}>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
            </div>
        </div>
    );
};

export default Pagamento;
