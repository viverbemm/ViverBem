import React, { useState } from 'react'; // Importação correta de useState
import { useNavigate } from 'react-router-dom'; // Importação correta de useNavigate
import styles from './Completar_Perfil.module.css'; // Importa o CSS separado
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';

const DadosProfissionais = ({ id_usuario }) => { // Recebendo o id_usuario como prop
    const [formData, setFormData] = useState({
        id_dados: id_usuario, // Inicializa o id_dados com o id_usuario
        id_usuario: id_usuario,
        experiencia: "",
        formacao: "",
        fale_sobre: "", // Nome correto aqui
        valor_diaria: "", // Nome correto aqui
        caminho_imagem: "",
    });

    const [errors, setErrors] = useState({
        experiencia: false,
        formacao: false,
        fale_sobre: false, // Nome correto aqui
        valor_diaria: false, // Nome correto aqui
        caminho_imagem: false,
    });

    const navigate = useNavigate(); // Hook para navegar para outra tela

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "valor_diaria") { // Corrigido: nome correto aqui
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            experiencia: !formData.experiencia,
            formacao: !formData.formacao.trim(),
            fale_sobre: !formData.fale_sobre.trim(), // Corrigido: nome correto aqui
            valor_diaria: !formData.valor_diaria.trim(), // Corrigido: nome correto aqui
            // Verificar se o caminho_imagem não é nulo (ou seja, um arquivo foi selecionado)
            caminho_imagem: !formData.caminho_imagem,
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
                            name="fale_sobre" // Corrigido: nome correto aqui
                            value={formData.fale_sobre} // Corrigido: nome correto aqui
                            onChange={handleInputChange}
                            placeholder="Escreva um breve resumo sobre você"
                        ></textarea>
                    </div>
                    <div className={`${styles.form_group} ${errors.valor_diaria ? styles.error : ""}`}>
                        <label>Qual valor da sua diária?</label>
                        <input
                            type="text"
                            name="valor_diaria" // Corrigido: nome correto aqui
                            value={formData.valor_diaria} // Corrigido: nome correto aqui
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
