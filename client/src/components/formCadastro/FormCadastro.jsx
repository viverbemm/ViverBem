import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/navBar";
import styles from "./Formcadastro.module.css";
import NavInferior from "../layout/navInferior";

function FormCadastro({ titulo, handleSubmit, id }) {
  const navigate = useNavigate(); // Navegação para a tela de pagamento
  const [usuarios, setUsuarios] = useState([]);
  const [formCadastro, setFormCadastro] = useState({
    nome_completo: "",
    telefone: "",
    email: "",
    cpf: "",
    data_nascimento: "",
    senha: "",
    cidade: "", // Cidade foi incluída aqui novamente
  });

  const [erros, setErros] = useState({}); // Armazena os erros de validação

  useEffect(() => {
    if (id) {
      buscarCadastro(id);
    } else {
      carregarUsuarios();
    }
  }, [id]);

  async function buscarCadastro(id) {
    try {
      const resposta = await fetch(`http://localhost:5000/usuario/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resposta.ok) {
        throw new Error("Erro ao buscar usuário");
      } else {
        const respostaJSON = await resposta.json();
        setFormCadastro(respostaJSON);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function carregarUsuarios() {
    try {
      const resposta = await fetch("http://localhost:5000/usuario", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resposta.ok) {
        throw new Error("Erro ao carregar usuários");
      } else {
        const respostaJSON = await resposta.json();
        setUsuarios(respostaJSON);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Função para verificar se o CPF já existe
  function verificarCpfExistente(cpf) {
    return usuarios.some((usuario) => usuario.cpf === cpf);
  }

  // Função para validar o CPF
  function validarCpf(cpf) {
    const cpfLimpo = cpf.replace(/\D/g, "");

    // Verificar se o CPF tem 11 dígitos
    if (cpfLimpo.length !== 11) {
      return false;
    }

    // Verificar se o CPF é uma sequência de números iguais
    if (/^(\d)\1{10}$/.test(cpfLimpo)) {
      return false;
    }

    // Calcular o primeiro dígito verificador
    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpfLimpo.charAt(i)) * peso--;
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito === 10 || primeiroDigito === 11) {
      primeiroDigito = 0;
    }

    // Calcular o segundo dígito verificador
    soma = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpfLimpo.charAt(i)) * peso--;
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito === 10 || segundoDigito === 11) {
      segundoDigito = 0;
    }

    // Verificar se os dígitos calculados coincidem com os fornecidos
    if (parseInt(cpfLimpo.charAt(9)) !== primeiroDigito || parseInt(cpfLimpo.charAt(10)) !== segundoDigito) {
      return false;
    }

    return true;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    // Restringir entrada para tipos específicos
    if (name === "telefone") {
      // Remove qualquer coisa que não seja número
      const somenteNumeros = value.replace(/\D/g, "");

      // Permite no máximo 11 números para o telefone
      if (somenteNumeros.length <= 11) {
        // Aplica a formatação no telefone
        const formattedPhone = somenteNumeros
          .replace(/^(\d{2})(\d{5})?(\d{4})?/, "($1) $2-$3")
          .replace(/-$/, "");
        setFormCadastro({ ...formCadastro, telefone: formattedPhone });
      }
    } else if (name === "cpf") {
      const somenteNumeros = value.replace(/\D/g, ""); // Remove qualquer coisa que não seja número
      const formattedCPF = somenteNumeros
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .slice(0, 14);
      setFormCadastro({ ...formCadastro, cpf: formattedCPF });
    } else if (name === "nome") {
      const somenteLetras = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
      setFormCadastro({ ...formCadastro, nome: somenteLetras });
    } else {
      setFormCadastro({
        ...formCadastro,
        [name]: value,
      });
    }
  }

  function validarFormulario() {
    const novosErros = {};

    // Validação de CPF
    if (!validarCpf(formCadastro.cpf)) {
      novosErros.cpf = "CPF inválido";
    }

    // Verificar se o CPF já está cadastrado
    if (verificarCpfExistente(formCadastro.cpf)) {
      novosErros.cpf = "Este CPF já está cadastrado.";
    }

    // Validação de telefone
    const telefoneValido = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!telefoneValido.test(formCadastro.telefone)) {
      novosErros.telefone = "Telefone inválido";
    }

    // Validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(formCadastro.email)) {
      novosErros.email = "E-mail inválido";
    }

    // Validação de senha forte
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!senhaForte.test(formCadastro.senha)) {
      novosErros.senha =
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um símbolo.";
    }

    // Validação de senhas iguais
    if (formCadastro.senha !== formCadastro.confirmar_senha) {
      novosErros.confirmar_senha = "As senhas não são iguais.";
    }

    // Validação de maioridade
    const hoje = new Date();
    const nascimento = new Date(formCadastro.data_nascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    if (idade < 18 || (idade === 18 && hoje < new Date(nascimento.setFullYear(hoje.getFullYear())))) {
      novosErros.data_nascimento = "Você precisa ter 18 anos ou mais.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0; // Retorna true se não houver erros
  }

  function submit(e) {
    e.preventDefault();

    if (validarFormulario()) {
      // Enviar os dados do formulário
      handleSubmit(formCadastro, id);

      // Redirecionar para a tela de pagamento, passando o id do usuário
      navigate("/pagamento", { state: { userId: id } });
    }
  }

  return (
    <div>
      <NavBar />
      <div className={styles.login_section}>
        <main>
          <section>
            <div className={styles.form_container}>
              <h1>{titulo}</h1>
              <h2>
                <b>{formCadastro.id ? "Editar Usuário" : "Cadastre-se"}</b>
              </h2>
              <form onSubmit={submit}>
                <input
                  type="text"
                  name="nome_completo"
                  placeholder="Nome Completo"
                  value={formCadastro.nome_completo}
                  onChange={handleChange}
                  required
                />
                {erros.nome && <p className={styles.error}>{erros.nome}</p>}
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone *"
                  value={formCadastro.telefone}
                  onChange={handleChange}
                  required
                />
                {erros.telefone && <p className={styles.error}>{erros.telefone}</p>}
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formCadastro.email}
                  onChange={handleChange}
                  required
                />
                {erros.email && <p className={styles.error}>{erros.email}</p>}
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF *"
                  value={formCadastro.cpf}
                  onChange={handleChange}
                  required
                />
                {erros.cpf && <p className={styles.error}>{erros.cpf}</p>}
                <input
                  type="date"
                  name="data_nascimento"
                  value={formCadastro.data_nascimento}
                  onChange={handleChange}
                  required
                />
                {erros.data_nascimento && <p className={styles.error}>{erros.data_nascimento}</p>}
                <input
                  type="password"
                  name="senha"
                  placeholder="Crie uma senha *"
                  value={formCadastro.senha}
                  onChange={handleChange}
                  required
                />
                {erros.senha && <p className={styles.error}>{erros.senha}</p>}
                <input
                  type="password"
                  name="confirmar_senha"
                  placeholder="Confirme sua senha *"
                  value={formCadastro.confirmar_senha}
                  onChange={handleChange}
                  required
                />
                {erros.confirmar_senha && <p className={styles.error}>{erros.confirmar_senha}</p>}

                <select
                  className={styles.sec}
                  name="cidade"
                  value={formCadastro.cidade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione sua cidade:</option>
                  <option value="cariacica">Cariacica</option>
                  <option value="vitoria">Vitória</option>
                  <option value="guarapari">Vila Velha</option>
                  <option value="serra">Serra</option>
                  <option value="guarapari">Guarapari</option>
                </select>
                <button type="submit" className={styles.cadastrar_button}>
                  {id ? "Editar" : "Cadastrar"}
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
      <NavInferior />
    </div>
  );
}

export default FormCadastro;
