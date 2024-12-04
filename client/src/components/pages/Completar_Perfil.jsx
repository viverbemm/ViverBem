import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Completar_Perfil.module.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';

const DadosProfissionais = () => {
    useEffect(() => {
        const id_usuario = localStorage.getItem("id_usuario");
        console.log(id_usuario);
        setFormData({ ...formData, id_usuario: id_usuario });
    }, []);

    const [formData, setFormData] = useState({
        id_usuario: "",
        experiencia: "",
        formacao: "",
        fale_sobre: "",
        valor_diaria: "",
        caminho_imagem: "",
    });

    const [errors, setErrors] = useState({
        experiencia: false,
        formacao: false,
        fale_sobre: false,
        valor_diaria: false,
        caminho_imagem: false,
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "valor_diaria") {
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
        setFormData({ ...formData, caminho_imagem: e.target.files[0] });
        setErrors({ ...errors, caminho_imagem: false });
    };

    async function cadastrarPerfil(infoCadastro) {
        try {
            const resposta = await fetch('http://localhost:5000/perfil', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(infoCadastro),
            });

            if (!resposta.ok) {
                console.log('Erro ao cadastrar perfil');
            } else {
                const { id_usuario } = await resposta.json();
                console.log(id_usuario);
                localStorage.setItem("id_usuario", id_usuario);
                alert('Perfil cadastrado com sucesso');
            }
        } catch (error) {
            console.error('Erro ao cadastrar perfil', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            experiencia: !formData.experiencia,
            formacao: !formData.formacao.trim(),
            fale_sobre: !formData.fale_sobre.trim(),
            valor_diaria: !formData.valor_diaria.trim(),
            caminho_imagem: !formData.caminho_imagem,
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Chama a função para cadastrar o perfil
        await cadastrarPerfil(formData);

        // Navegar para a tela de exibição de perfil, após o cadastro
        navigate('/perfil', { state: { formData } });
    };

    return (
        <div className={styles.perfil}>
            <NavBar />
            <div className={styles.form_container}>
                <h2><b>Complete seu perfil</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.form_group} ${errors.caminho_imagem ? styles.error : ""}`}>
                        <label>Adicione sua foto:</label>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    </div>
                    <div className={`${styles.form_group} ${errors.experiencia ? styles.error : ""}`}>
                        <label>Quanto tempo de experiência você possui?</label>
                        <input
                            type="text"
                            name="experiencia"
                            value={formData.experiencia}
                            onChange={handleInputChange}
                            placeholder="Ex: 5 anos"
                        />
                    </div>
                    <div className={`${styles.form_group} ${errors.formacao ? styles.error : ""}`}>
                        <label>Sua formação acadêmica:</label>
                        <input
                            type="text"
                            name="formacao"
                            value={formData.formacao}
                            onChange={handleInputChange}
                            placeholder="Ex: Ensino superior completo"
                        />
                    </div>
                    <div className={`${styles.form_group} ${errors.fale_sobre ? styles.error : ""}`}>
                        <label>Fale um pouco sobre você:</label>
                        <textarea
                            name="fale_sobre"
                            value={formData.fale_sobre}
                            onChange={handleInputChange}
                            placeholder="Escreva um breve resumo sobre você"
                        ></textarea>
                    </div>
                    <div className={`${styles.form_group} ${errors.valor_diaria ? styles.error : ""}`}>
                        <label>Qual valor da sua diária?</label>
                        <input
                            type="text"
                            name="valor_diaria"
                            value={formData.valor_diaria}
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
