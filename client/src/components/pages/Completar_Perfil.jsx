import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importando o hook de navegação
import styles from './Completar_Perfil.module.css'; // Importa o CSS separado
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';

const Completar_Perfil = () => {
    const [formData, setFormData] = useState({
        photo: null,
        experience: "",
        education: "",
        about: "",
        dailyRate: "",
    });

    const [errors, setErrors] = useState({
        photo: false,
        experience: false,
        education: false,
        about: false,
        dailyRate: false,
    });

    const navigate = useNavigate(); // Hook para navegar para outra tela

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            photo: !formData.photo,
            experience: !formData.experience.trim(),
            education: !formData.education.trim(),
            about: !formData.about.trim(),
            dailyRate: !formData.dailyRate.trim(),
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
                    <button type="submit" className={styles.submit_button}>
                        Enviar
                    </button>
                </form>
            </div>
            <NavInferior />
        </div>
    );
};

export default Completar_Perfil;
