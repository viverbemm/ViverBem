import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Completar_Perfil.module.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';
import logo from '../pages/imagens/LOGO_VIVER_BEM_+_2-removebg-preview (1) - Copia.png';

const Completar_Perfil = () => {
    const [formData, setFormData] = useState({
        photo: null,
        experience: "",
        education: "",
        about: "",
        dailyRate: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({
        photo: false,
        experience: false,
        education: false,
        about: false,
        dailyRate: false,
        termsAccepted: false,
    });

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "dailyRate") {
            const formattedValue = value.replace(/\D/g, "");
            const formattedMoney = (formattedValue / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });

            setFormData({ ...formData, [name]: formattedMoney });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        setErrors({ ...errors, [name]: false });
    };

    const handlePhotoChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
        setErrors({ ...errors, photo: false });
    };

    const handleTermsChange = (e) => {
        setFormData({ ...formData, termsAccepted: e.target.checked });
        setErrors({ ...errors, termsAccepted: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            photo: !formData.photo,
            experience: !formData.experience.trim(),
            education: !formData.education.trim(),
            about: !formData.about.trim(),
            dailyRate: !formData.dailyRate.trim(),
            termsAccepted: !formData.termsAccepted,
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('descricao', formData.about);
        formDataToSend.append('imagem', formData.photo);

        async function getNomeFuncao(id_imagem) {
            console.log(`http://localhost:5000/imagens/${id_imagem}`);
            try {
                const response = await fetch('http://localhost:5000/imagens', {
                    method: 'POST',
                    body: formDataToSend,
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Perfil completo e imagem enviada com sucesso!');
                    navigate('/perfil', { state: { formData } });
                } else {
                    alert(data.message || 'Erro ao enviar os dados');
                }
            } catch (error) {
                console.error('Erro ao enviar os dados:', error);
                alert('Erro ao enviar os dados para o servidor.');
            }
        };
    }


    const handleLinkClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getCurrentDate = () => {
        const date = new Date();
        return date.toLocaleDateString("pt-BR", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={styles.perfil}>
            <NavBar />
            <div className={styles.form_container}>
                <h2><b>Complete seu perfil</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.form_group} ${errors.photo ? styles.error : ""}`}>
                        <label>Adicione sua foto:</label>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    </div>
                    <div className={`${styles.form_group} ${errors.experience ? styles.error : ""}`}>
                        <label>Quanto tempo de experiência você possui?</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            placeholder="Ex: 5 anos"
                        />
                    </div>
                    <div className={`${styles.form_group} ${errors.education ? styles.error : ""}`}>
                        <label>Sua formação acadêmica:</label>
                        <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            placeholder="Ex: Ensino superior completo"
                        />
                    </div>
                    <div className={`${styles.form_group} ${errors.about ? styles.error : ""}`}>
                        <label>Fale um pouco sobre você:</label>
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleInputChange}
                            placeholder="Escreva um breve resumo sobre você"
                        ></textarea>
                    </div>
                    <div className={`${styles.form_group} ${errors.dailyRate ? styles.error : ""}`}>
                        <label>Qual valor da sua diária?</label>
                        <input
                            type="text"
                            name="dailyRate"
                            value={formData.dailyRate}
                            onChange={handleInputChange}
                            placeholder="Ex: R$ 200,00"
                        />
                    </div>
                    <div className={`${styles.form_terms} ${errors.termsAccepted ? styles.error : ""}`}>
                        <label st>
                            Declaro que li e concordo com os{" "}
                            <a href="#" onClick={handleLinkClick}>termos de uso</a> da plataforma.
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleTermsChange}
                                className={errors.termsAccepted ? styles.error_checkbox : ""}
                            />
                        </label>
                    </div>
                    <button type="submit" className={styles.submit_button}>
                        Enviar
                    </button>
                </form>
            </div>

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <h2>Termos de Uso</h2>
                        <textarea className={styles.termosTextarea}
                            rows="10"
                            cols="0"
                            value='Última atualização: [Data]
                                Bem-vindo ao Viver Bem+. Ao acessar ou usar os nossos serviços, você concorda com os seguintes Termos de Uso. Se não concordar com qualquer parte destes termos, por favor, não use nossos serviços.
                                1. Definições
                                "Serviço": 
                                "Usuário": Qualquer pessoa que acesse ou use o serviço.
                                2. Aceitação dos Termos
                                Ao utilizar nosso serviço, você concorda com estes Termos de Uso, incluindo quaisquer alterações futuras.
                                3. Regras de Uso
                                O usuário concorda em usar o serviço de maneira legal, não violando direitos de terceiros, evitando a distribuição de malware, ou praticando qualquer ato ilícito.'
                            readOnly
                        ></textarea>
                        <p style={{ marginLeft: '10px' }}>{getCurrentDate()}</p> { }
                        <img style={{ width: "400px", height: "350px", marginLeft: "80px" }} src={logo} />
                        <div>
                            <button onClick={() => setShowModal(false)}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}

            <NavInferior />
        </div>
    );
};

export default Completar_Perfil;
