import React, { useState } from 'react';
import styles from './Pag_men.module.css';
import NavBar from '../layout/navBar';
import { useNavigate } from 'react-router-dom';

function Pagamento() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardType, setCardType] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [plan, setPlan] = useState('mensal'); // Estado para o plano selecionado
    const navigate = useNavigate(); // Hook para navegação

    const identifyCardType = (number) => {
        const visaRegEx = /^4[0-9]{0,}/;
        const masterCardRegEx = /^5[1-5][0-9]{0,}/;
        const amexRegEx = /^(34|37)[0-9]{0,}/; // American Express começa com 34 ou 37
        const eloRegEx = /^(636|645|649|650|651|652|653|654)[0-9]{0,}/; // Elo começa com esses prefixos
        const hipercardRegEx = /^606282[0-9]{0,}/; // Hipercard começa com 606282
    
        if (visaRegEx.test(number)) {
            return "Visa";
        } else if (masterCardRegEx.test(number)) {
            return "MasterCard";
        } else if (amexRegEx.test(number)) {
            return "American Express";
        } else if (eloRegEx.test(number)) {
            return "Elo";
        } else if (hipercardRegEx.test(number)) {
            return "Hipercard";
        }
        return "Unknown";
    };

    const handleCardNumberChange = (e) => {
        let number = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (number.length > 4) {
            number = number.replace(/(\d{4})(\d{1,4})/, '$1 $2'); // Adiciona o espaço após os 4 primeiros dígitos
        }
        if (number.length > 9) {
            number = number.replace(/(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3'); // Adiciona o espaço após os 8 primeiros dígitos
        }
        if (number.length > 14) {
            number = number.replace(/(\d{4})(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3 $4'); // Adiciona o espaço após os 12 primeiros dígitos
        }
        setCardNumber(number);
        setCardType(identifyCardType(number));
    };

    const handleExpiryDateChange = (e) => {
        // Adiciona a barra automaticamente e valida o formato
        let value = e.target.value.replace(/\D/g, '').slice(0, 4); // Remove caracteres não numéricos e limita a 4 caracteres
        if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`; // Adiciona a barra entre mês e ano
        }
        setExpiryDate(value);
    };

    const handlePlanChange = (e) => {
        setPlan(e.target.value);
    };

    const handleCardHolderChange = (e) => {
        const value = e.target.value;
        // Permite apenas letras e espaços no campo "Nome do Titular"
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setCardHolder(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Valida o ano da data de validade
        const currentYear = new Date().getFullYear();
        const expiryYear = parseInt(expiryDate.slice(3, 5), 10);
        const expiryMonth = parseInt(expiryDate.slice(0, 2), 10);

        if (cardNumber.length === 19 && expiryDate.length === 5 && cvv.length === 3 && cardHolder) {
            if (expiryYear < currentYear % 100 || (expiryYear === currentYear % 100 && expiryMonth < new Date().getMonth() + 1)) {
                alert("O ano de validade do cartão precisa ser maior ou igual a 2024.");
                return;
            }
            setAuthenticated(true);
            // Aguarda 2 segundos (2000 ms) antes de redirecionar
            setTimeout(() => {
                navigate('/Completarperfil');
            }, 3000);
        } else {
            alert("Dados inválidos. Verifique as informações e tente novamente.");
        }
    };

    const planValue = plan === 'mensal' ? 'R$ 29,90' : 'R$ 299,90';

    return (
        <div className={styles.cartao}>
            <NavBar />
            <div className={styles.payment_form}>
                <h2><b>Concluir Cadastro</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label><b>Escolha o Plano</b></label>
                        <select value={plan} onChange={handlePlanChange}>
                            <option value="mensal">Mensal - R$ 29,90</option>
                            <option value="anual">Anual - R$ 299,90</option>
                        </select>
                    </div>
                    <div className={styles.form_group}>
                        <label><b>Valor do Plano Selecionado</b></label>
                        <p>{planValue}</p>
                    </div>
                    <div className={styles.form_group}>
                        <label><b>Número do Cartão</b> {cardType && <span>({cardType})</span>}</label>
                        <input
                            type="text"
                            placeholder="1234 5678 9123 4567"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength="19" // Permite 19 caracteres (com os espaços)
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label><b>Nome do Titular</b></label>
                        <input
                            type="text"
                            placeholder="Nome no cartão"
                            value={cardHolder}
                            onChange={handleCardHolderChange}
                        />
                    </div>
                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label><b>Data de Validade</b></label>
                            <input
                                type="text"
                                placeholder="MM/AA"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                maxLength="5"
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label><b>CVV</b></label>
                            <input
                                type="password"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                maxLength="3"
                            />
                        </div>
                    </div>
                    <button type="submit">Finalizar</button>
                </form>
                {authenticated && <p className={styles.success_message}><b>Compra efetuada com sucesso!<br /> Comprovante enviado no e-mail cadastrado</b></p>}
            </div>
        </div>
    );
}

export default Pagamento;
