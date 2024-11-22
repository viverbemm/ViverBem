import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Importando o hook useLocation
import { FaPen } from "react-icons/fa"; // Ícone de edição
import styles from './Perfil_completo.module.css'; // Importa o CSS para o componente
import NavConfig from "../layout/navConfig";
import NavInferior from "../layout/navInferior";

const Perfil_Completo = () => {
    const location = useLocation(); // Agora utilizando o hook useLocation corretamente
    const { formData } = location.state || {}; // Desestruturando os dados passados

    const [editableData, setEditableData] = useState(formData);
    const [isEditing, setIsEditing] = useState(false); // Controla o modo de edição

    const handleEdit = () => {
        setIsEditing(true); // Ativa o modo de edição
    };

    const handleSave = () => {
        setIsEditing(false); // Desativa o modo de edição
        console.log("Dados salvos:", editableData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditableData((prevData) => ({
                ...prevData,
                photo: file
            }));
        }
    };

    return (
        <div>
            <NavConfig />
            <div className={styles.profile_container}>
                <h2>Perfil Completo</h2>

                <div>
                    <h3>Foto:</h3>
                    {isEditing ? (
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    ) : (
                        <img
                            src={editableData.photo ? URL.createObjectURL(editableData.photo) : ''}
                            alt="Perfil"
                            width="100"
                        />
                    )}
                </div>

                <div>
                    <h3>Experiência:</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            name="experience"
                            value={editableData.experience}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.experience}</p>
                    )}
                </div>

                <div>
                    <h3>Formação Acadêmica:</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            name="education"
                            value={editableData.education}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.education}</p>
                    )}
                </div>

                <div>
                    <h3>Sobre você:</h3>
                    {isEditing ? (
                        <textarea
                            name="about"
                            value={editableData.about}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.about}</p>
                    )}
                </div>

                <div>
                    <h3>Valor da Diária:</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            name="dailyRate"
                            value={editableData.dailyRate}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.dailyRate}</p>
                    )}
                </div>

                <div className={styles.button_container}>
                    <button onClick={isEditing ? handleSave : handleEdit} className={styles.edit_button}>
                        <FaPen /> {isEditing ? "Salvar" : "Editar"}
                    </button>
                </div>
            </div>

            <NavInferior />
        </div>
    );
};

export default Perfil_Completo;
