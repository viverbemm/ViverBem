import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importando o hook useLocation e useNavigate
import { FaPen } from "react-icons/fa"; // Ícone de edição
import styles from './Perfil_completo.module.css'; // Importa o CSS para o componente
import NavConfig from "../layout/navConfig";
import NavInferior from "../layout/navInferior";

const Perfil_Completo = () => {
    const [id_usuario, setId_usuario] = useState('');
    const location = useLocation(); // Agora utilizando o hook useLocation corretamente
    const navigate = useNavigate(); // Navegação para redirecionar após salvar
    const { formData } = location.state || {}; // Desestruturando os dados passados

    // Se formData estiver undefined, inicialize com valores vazios
    const [editableData, setEditableData] = useState(formData || {
        caminho_imagem: "",
        experiencia: "",
        formacao: "",
        fale_sobre: "",
        valor_diaria: ""
    });
    const [isEditing, setIsEditing] = useState(false); // Controla o modo de edição

    // Função para enviar os dados para a API (atualização do perfil)
    const updateProfileData = async (data) => {
        try {
            const response = await fetch(`http://localhost:5000/perfil/${data.id_dado}`, {
                method: 'PUT', // Usando PUT para atualizar os dados
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Envia os dados como JSON
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar perfil');
            }

            const result = await response.json();
            console.log('Perfil atualizado com sucesso', result);
            alert('Perfil atualizado com sucesso!');

            // Navegar para a página de perfil com os dados atualizados
            navigate('/perfil', { state: { formData: result } });

        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            alert('Houve um erro ao tentar atualizar o perfil.');
        }
    };

    const handleEdit = () => {
        setIsEditing(true); // Ativa o modo de edição
    };

    const handleSave = () => {
        setIsEditing(false); // Desativa o modo de edição
        console.log("Dados salvos:", editableData);

        // Envia os dados atualizados para a API
        updateProfileData(editableData);
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
                caminho_imagem: file
            }));
        }
    };

    // Função para carregar os dados do perfil (no caso de não ter sido passado pelo estado)
    useEffect(() => {
        //console.log('teste');
        const usuarioArmazenado = localStorage.getItem("id_usuario");
        if (usuarioArmazenado) {
            setId_usuario(usuarioArmazenado);
            //console.log(`${usuarioArmazenado}`);
            if (!formData) {
                carregarDados(usuarioArmazenado);
        }
        }

    }, [formData]);

    async function carregarDados(id_usuario) {
        try {
            const resposta = await fetch(`http://localhost:5000/perfil/${id_usuario}`);
            const data = await resposta.json()
            setEditableData(data)
        } catch (error) {
            console.error("Erro ao carregar perfil:", error)
        }    
    }
    return (
        <div>
            <NavConfig />
            <div className={styles.profile_container}>
                <h2>Perfil Completo</h2>

                <div>
                    <h3>Foto:</h3>
                       {/* {isEditing ? (
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        ): ( */}
                        <img
                            src={`http://localhost:5000/public/${editableData.caminho_imagem}`} // Corrigido para caminho_imagem
                            alt="Perfil"
                            width="100"
                        />
                    {/* )} */}
                </div>

                <div>
                    <h3>Experiência:</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            name="experiencia" // Alterado para o nome correto
                            value={editableData.experiencia}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.experiencia}</p>
                    )}
                </div>

                <div>
                    <h3>Formação Acadêmica:</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            name="formacao" // Alterado para o nome correto
                            value={editableData.formacao}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.formacao}</p>
                    )}
                </div>

                <div>
                    <h3>Sobre você:</h3>
                    {isEditing ? (
                        <textarea
                            name="fale_sobre" // Alterado para o nome correto
                            value={editableData.fale_sobre}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.fale_sobre}</p>
                    )}
                </div>

                <div>
                    <h3>Valor da Diária:</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            name="valor_diaria" // Alterado para o nome correto
                            value={editableData.valor_diaria}
                            onChange={handleChange}
                        />
                    ) : (
                        <p>{editableData.valor_diaria}</p>
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
