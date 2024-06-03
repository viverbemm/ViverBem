import React from 'react'
import imagensArray from '../../Imagens'
function Tela_login() {
    return (
        <div><div class="roxo">
            <h1 id="titulo_um">ViverBem+</h1>
            <div id="menu">
                <a href="pagina_inicial.html"><b>Página inicial</b></a>
                <a href="login.html"><b>Login</b></a>
            </div>
            <div id="logo">
                <img src={imagensArray.velho} alt="" />

            </div>
            <div id="logotipo">
                <img src={imagensArray.logo} alt="" />
                <div id="caixa">

                </div>

            </div>
            <div id="log" />

            <label for="login">CPF ou E-mail:</label>
            <input type="text" id="nome" name="nome" placeholder="Insira seu cpf ou e-mail" />
            <label for="nome">Senha:</label>
            <input type="password" id="nome" name="nome" placeholder="Insira sua senha" />

            <div id="botao">
                <button>Enviar</button>
            </div>

        </div></div>
    )
}

export default Tela_login
