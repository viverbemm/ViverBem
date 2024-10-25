import React from 'react';
import profilePic from '../pages/imagens/luisa.webp';

const Page = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.logo}>ViverBem+</h1>
                <nav style={styles.nav}>
                    <a href="/" style={styles.navLink}>Página inicial</a>
                    <a href="/login" style={styles.navLink}>Login</a>
                </nav>
            </header>

            <section style={styles.main}>
                <div style={styles.profileContainer}>
                    <img
                        src={profilePic}
                        alt="Luísa Heringer"
                        style={styles.profileImage}
                    />
                    <div style={styles.profileInfo}>
                        <h2 style={styles.profileName}>Luísa Heringer</h2>
                        <h3 style={styles.servicesTitle}>Serviços oferecidos:</h3>
                        <ul style={styles.servicesList}>
                            <li>Assistência diária</li>
                            <li>Gerenciamento de sintomas</li>
                            <li>Estimulação cognitiva</li>
                            <li>Fisioterapia e exercícios</li>
                            <li>Suporte emocional</li>
                            <li>Coordenação com profissionais de saúde</li>
                        </ul>
                    </div>
                </div>

                <div style={styles.reservationInfo}>
                    <h3 style={styles.sectionTitle}>Informações da Reserva</h3>
                    <div style={styles.reservationDetails}>
                        <div style={styles.reservationDates}>
                            <p><strong>Check-in:</strong> 05/08/2024</p>
                            <p><strong>Checkout:</strong> 09/08/2024</p>
                        </div>
                        <div style={styles.reservationCosts}>
                            <p><strong>R$ 150 x 5 DIÁRIAS</strong> = R$ 750,00</p>
                            <p><strong>Taxa de serviço do ViverBem+</strong> = R$ 156,00</p>
                            <p><strong>Total:</strong> R$ 906,00</p>
                        </div>
                    </div>
                    <p style={styles.paymentInfo}>
                        Após a confirmação do pagamento via cartão de crédito, você será automaticamente direcionado para a página do profissional.
                    </p>
                </div>

                <div style={styles.paymentSection}>
                    <h3 style={styles.sectionTitle}>Pagamento</h3>
                    <div style={styles.creditCardInfo}>
                        <p>Cartão de crédito em até 12x:</p>
                        <img src="https://via.placeholder.com/300x50" alt="Cartões aceitos" style={styles.paymentMethods} />
                    </div>
                    <form style={styles.paymentForm}>
                        <input type="text" placeholder="Número do cartão" style={styles.input} />
                        <input type="text" placeholder="Nome que consta no cartão" style={styles.input} />
                        <input type="text" placeholder="Validade" style={styles.input} />
                        <input type="text" placeholder="CVV" style={styles.input} />
                        <button type="submit" style={styles.button}>Efetuar Pagamento</button>
                    </form>
                </div>

                <div style={styles.contactSection}>
                    <h3 style={styles.sectionTitle}>Contato</h3>
                    <p>Email: <a href="mailto:luisaheringer@gmail.com">luisaheringer@gmail.com</a></p>
                    <p>Telefone: (27) 99999-2121</p>
                    <p>Estou sempre em busca de novas oportunidades. Entre em contato.</p>
                </div>
            </section>

            <footer style={styles.footer}>
                <p>ViverBem+</p>
                <p>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        backgroundColor: '#F3F3F3',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#6A5ACD',
        color: '#FFF',
    },
    logo: {
        margin: '0',
        fontSize: '24px',
    },
    nav: {
        display: 'flex',
        gap: '15px',
    },
    navLink: {
        color: '#FFF',
        textDecoration: 'none',
        fontSize: '18px',
    },
    main: {
        padding: '20px',
    },
    profileContainer: {
        display: 'flex',
        backgroundColor: '#E6E6FA',
        padding: '20px',
        borderRadius: '8px',
    },
    profileImage: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    },
    profileInfo: {
        marginLeft: '20px',
    },
    profileName: {
        margin: '0',
        fontSize: '22px',
    },
    servicesTitle: {
        margin: '10px 0 0 0',
        fontSize: '18px',
    },
    servicesList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    reservationInfo: {
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
    },
    sectionTitle: {
        margin: '0 0 10px 0',
        fontSize: '20px',
    },
    reservationDetails: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    reservationDates: {},
    reservationCosts: {},
    paymentInfo: {
        marginTop: '10px',
    },
    paymentSection: {
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
    },
    creditCardInfo: {
        marginBottom: '20px',
    },
    paymentMethods: {
        width: '100%',
    },
    paymentForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #CCC',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#6A5ACD',
        color: '#FFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    contactSection: {
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
    },
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#6A5ACD',
        color: '#FFF',
        marginTop: '20px',
    }
};

export default Page;
