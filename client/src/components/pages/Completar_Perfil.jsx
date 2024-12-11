import React, { useState, useEffect, useRef } from "react";
import styles from './Completar_Perfil.module.css';
import NavInferior from '../layout/navInferior';
import { useNavigate } from 'react-router-dom';
import logo from '../pages/imagens/logox.png';
import NavBar from '../layout/navBar';

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
        formDataToSend.append('imagem', formData.photo);  // Enviando apenas a foto

        try {
            const response = await fetch('http://localhost:5000/imagens', {
                method: 'POST',
                body: formDataToSend,  // Enviando os dados como FormData
            });

            if (response.ok) {
                const data = await response.json();
                alert('Perfil completo e imagem enviada com sucesso!');
                navigate('/perfil', { state: { formData } });
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Erro ao enviar os dados');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao enviar os dados para o servidor.');
        }
    };

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
                <h1 style={{
                    fontSize: '25px', textAlign: 'center', fontWeight: 'bold',
                    color: '#23008D', marginBottom: '20px'
                }}>COMPLETE SEU PERFIL</h1>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.form_group} ${errors.photo ? styles.error : ""}`}>
                        <label>Adicione sua foto:</label>
                        <input type="file" accept="image/*" id="imagem-form" method="POST" encType="multipart/form-data" onChange={handlePhotoChange} />
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
                        <label>
                            Declaro que li e concordo com os{" "}
                            <a href="#" onClick={handleLinkClick}>termos de uso</a> da plataforma.ﾠ
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
                        <h1 style={{
                            fontSize: '25px', textAlign: 'center', fontWeight: 'bold',
                            color: '#23008D', marginBottom: '20px'
                        }}>Termos de Uso</h1>
                        <textarea className={styles.termosTextarea}
                            rows="10"
                            cols="0"
                            value='
                                ﾠﾠ
                                 Bem-vindo ao Viver Bem+. Ao acessar ou usar os serviços daﾠﾠﾠﾠﾠ  ﾠﾠﾠﾠplataforma, você concorda com os seguintes Termos de Uso. 
                                Caso contrário, não contrate os serviços da plataforma.
                                ﾠﾠ
                                Termos de Uso - Aviso Importante
                                ﾠ
                                Ao utilizar a plataforma ViverBem+, o cliente reconhece que não garantimos a segurança ou a qualidade dos serviços prestados pelos profissionais cadastrados. A plataforma apenas intermedeia a conexão entre clientes e cuidadores, e o cliente é responsável por verificar as qualificações e idoneidade do profissional antes de contratar.
                                ﾠ
                                O ViverBem+ não se responsabiliza por qualquer incidente ou dano relacionado à prestação de serviços. Recomendamos que o cliente faça a devida pesquisa, como entrevistas e verificação de referências, para assegurar que suas necessidades sejam atendidas de forma adequada e segura.
                                ﾠ
                                Ao utilizar a plataforma, o cliente concorda com essas condições e isenta o ViverBem+ de qualquer responsabilidade sobre os serviços prestados.'
                            readOnly
                        ></textarea>
                        <p style={{ marginLeft: '30%' }}>{getCurrentDate()}</p>
                        <img style={{ height: "100px", width: "220px", marginLeft: "30%", marginBottom: "20px" }} src={logo} />
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