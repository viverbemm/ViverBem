import React from "react";
import { useLocation } from "react-router-dom";
import styles from './Perfil_completo.module.css'; // Importa o CSS para o componente

const Perfil_Completo = () => {
    const location = useLocation(); // Obtém os dados passados pela navegação
    const { formData } = location.state || {}; // Desestruturando os dados passados

    if (!formData) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.profile_container}>
            <h2>Perfil Completo</h2>
            <div>
                <h3>Foto:</h3>
                {formData.photo ? <img src={URL.createObjectURL(formData.photo)} alt="Perfil" width="100" /> : "Sem foto"}
            </div>
            <div>
                <h3>Experiência:</h3>
                <p>{formData.experience}</p>
            </div>
            <div>
                <h3>Formação Acadêmica:</h3>
                <p>{formData.education}</p>
            </div>
            <div>
                <h3>Sobre você:</h3>
                <p>{formData.about}</p>
            </div>
            <div>
                <h3>Valor da Diária:</h3>
                <p>{formData.dailyRate}</p>
            </div>
        </div>
    );
};

export default Perfil_Completo;