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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Completar_Perfil.module.css";
import NavBar from "../layout/navBar";
import NavInferior from "../layout/navInferior";

const DadosProfissionais = () => {
    const [formValues, setFormValues] = useState({
        experiencia: "",
        formacao: "",
        fale_sobre: "",
        valor_diaria: "",
        imagem: null,
    });

    const [errors, setErrors] = useState({
        experiencia: false,
        formacao: false,
        fale_sobre: false,
        valor_diaria: false,
        imagem: false,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const id_usuario = localStorage.getItem("id_usuario");
        setFormValues((prev) => ({ ...prev, id_usuario }));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setFormValues((prev) => ({ ...prev, imagem: file }));
        setErrors((prev) => ({ ...prev, imagem: false }));
    };

    const handleTermsChange = (e) => {
        setFormData({ ...formData, termsAccepted: e.target.checked });
        setErrors({ ...errors, termsAccepted: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos
        const newErrors = {
            photo: !formData.photo,
            experience: !formData.experience.trim(),
            education: !formData.education.trim(),
            about: !formData.about.trim(),
            dailyRate: !formData.dailyRate.trim(),
            termsAccepted: !formData.termsAccepted,
            experiencia: !formValues.experiencia,
            formacao: !formValues.formacao.trim(),
            fale_sobre: !formValues.fale_sobre.trim(),
            valor_diaria: !formValues.valor_diaria.trim(),
            imagem: !formValues.imagem,
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
        // Criar FormData
        const formData = new FormData();
        for (const key in formValues) {
            formData.append(key, formValues[key]);
        }

        try {
            const resposta = await fetch("http://localhost:5000/perfil", {
                method: "POST",
                body: formData,
            });

            if (!resposta.ok) {
                console.error("Erro ao cadastrar perfil");
            } else {
                const data = await resposta.json();
                localStorage.setItem("id_usuario", data.id_usuario);
                alert("Perfil cadastrado com sucesso");
                navigate("/perfil", { state: { formData } });
            }
        } catch (error) {
            console.error("Erro ao enviar perfil:", error);
        }
    };

    return (
        <div className={styles.perfil}>
            <NavBar />
            <div className={styles.form_container}>
                <h1 style={{
                    fontSize: '25px', textAlign: 'center', fontWeight: 'bold',
                    color: '#23008D', marginBottom: '20px'
                }}>Complete seu perfil</h1>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.form_group} ${errors.imagem ? styles.error : ""}`}>
                        <label>Adicione sua foto:</label>
                        <input type="file" accept="image/*" id="imagem-form" method="POST" encType="multipart/form-data" onChange={handlePhotoChange} />
                    </div>
                    <div className={`${styles.form_group} ${errors.experiencia ? styles.error : ""}`}>
                        <label>Quanto tempo de experiência você possui?</label>
                        <input
                            type="text"
                            name="experiencia"
                            value={formValues.experiencia}
                            onChange={handleInputChange}
                            placeholder="Ex: 5 anos"
                        />
                    </div>
                    <div className={`${styles.form_group} ${errors.formacao ? styles.error : ""}`}>
                        <label>Sua formação acadêmica:</label>
                        <input
                            type="text"
                            name="formacao"
                            value={formValues.formacao}
                            onChange={handleInputChange}
                            placeholder="Ex: Ensino superior completo"
                        />
                    </div>
                    <div className={`${styles.form_group} ${errors.fale_sobre ? styles.error : ""}`}>
                        <label>Fale um pouco sobre você:</label>
                        <textarea
                            name="fale_sobre"
                            value={formValues.fale_sobre}
                            onChange={handleInputChange}
                            placeholder="Escreva um breve resumo sobre você"
                        ></textarea>
                    </div>
                    <div className={`${styles.form_group} ${errors.valor_diaria ? styles.error : ""}`}>
                        <label>Qual valor da sua diária?</label>
                        <input
                            type="text"
                            name="valor_diaria"
                            value={formValues.valor_diaria}
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
                            value='Última atualização: [Data]
                                ﾠﾠ
                                 Bem-vindo ao Viver Bem+. Ao acessar ou usar os serviços daﾠﾠﾠﾠﾠ  ﾠﾠﾠﾠplataforma, você concorda com os seguintes Termos de Uso. 
                                Caso contrário, não contrate os serviços da plataforma.
                                ﾠﾠ
                                1. Definições
                                "Serviço": 
                                "Usuário": Qualquer pessoa que acesse ou use o serviço.
                                2. Aceitação dos Termos
                                Ao utilizar nosso serviço, você concorda com estes Termos de Uso, incluindo quaisquer alterações futuras.
                                3. Regras de Uso
                                O usuário concorda em usar o serviço de maneira legal, não violando direitos de terceiros, evitando a distribuição de malware, ou praticando qualquer ato ilícito.'
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

export default DadosProfissionais;
