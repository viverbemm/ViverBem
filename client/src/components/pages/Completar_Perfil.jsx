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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos
        const newErrors = {
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
                <h2><b>Complete seu perfil</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.form_group} ${errors.imagem ? styles.error : ""}`}>
                        <label>Adicione sua foto:</label>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} />
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
                    <button type="submit" className={styles.submit_button}>
                        Enviar
                    </button>
                </form>
            </div>
            <NavInferior />
        </div>
    );
};

export default DadosProfissionais;
