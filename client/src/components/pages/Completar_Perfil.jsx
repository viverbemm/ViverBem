import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'; // Importando o hook de navegação
import styles from './Completar_Perfil.module.css'; // Importa o CSS separado
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';
import logo from '../pages/imagens/LOGO_VIVER_BEM_+_2-removebg-preview (1).png';

const Completar_Perfil = () => {
    const [formData, setFormData] = useState({
        photo: null,
        experience: "",
        education: "",
        about: "",
        dailyRate: "",
        termsAccepted: false, // Estado para o checkbox de termos
    });

    const [errors, setErrors] = useState({
        photo: false,
        experience: false,
        education: false,
        about: false,
        dailyRate: false,
        termsAccepted: false, // Erro para o checkbox de termos
    });

    const [showModal, setShowModal] = useState(false); // Estado para controlar a visibilidade do modal
    const modalRef = useRef(); // Ref para detectar o clique fora do modal
    const navigate = useNavigate(); // Hook para navegação

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            photo: !formData.photo,
            experience: !formData.experience.trim(),
            education: !formData.education.trim(),
            about: !formData.about.trim(),
            dailyRate: !formData.dailyRate.trim(),
            termsAccepted: !formData.termsAccepted, // Verifica se o termo foi aceito
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Navegar para a tela de exibição de perfil, passando os dados do formulário
        navigate('/perfil', { state: { formData } });
    };

    const handleLinkClick = (e) => {
        e.preventDefault(); // Previne a navegação normal do link
        setShowModal(true); // Abre o modal ao clicar no link
    };

    const handleClickOutside = (e) => {
        // Fecha o modal se o clique for fora do modal
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        // Adiciona o evento de clique fora do modal
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Função para obter a data formatada
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
                        <label style={{ marginBottom: "5%" }}>
                            Declaro que li e concordo com os{" "}
                            <a href="#" onClick={handleLinkClick}>termos de uso</a> da plataformaﾠ
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleTermsChange}
                            />
                        </label>
                    </div>
                    <button type="submit" className={styles.submit_button}>
                        Enviar
                    </button>
                </form>
            </div>

            {/* Modal de termos de uso */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <h2>Termos de Uso</h2>
                        <textarea
                            rows="10"
                            cols="50"
                            value="Conteúdo dos termos de uso..."
                            readOnly
                        ></textarea>
                        <p>{getCurrentDate()}</p> {/* Exibe a data atual */}
                        <img style={{ width: "280px", height: "280px", marginLeft: "30px" }} src={logo} />
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
