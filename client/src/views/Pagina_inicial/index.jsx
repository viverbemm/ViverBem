import React from 'react'

function Pagina_inicial() {
    return (
        <div>
            
            <div class="roxo">
                <h1 id="titulo_um">ViverBem+</h1>
                <div id="menu">
                    <a href="pagina_inicial.html"><b>Página inicial</b></a>
                    <a href="login.html"><b>Login</b></a>
                </div>
            </div>
            
            <div>
                <img src="img/paginaprincipal.webp" alt="" />
            </div>

            <div id="meio">
                <div id="mao">
                    <img src="img/maos_principal.webp" alt="" />
                </div>
                <div class="texto_um cor">
                    <p id="titulo_dois">ViverBem+ </p>
                    <div>
                        <p id="paragrafo"> Seja bem-vindo ao seu destino confiável para encontrar cuidadores de idosos dedicados
                            e qualificados.
                            Reconhecemos a importância de encontrar o cuidador perfeito para você ou para seus entes queridos,
                            alguém em
                            quem você possa confiar plenamente. </p>
                    </div>
                </div>

            </div>
            <div id="vamos">
                <h1>Vamos Conversar</h1>
            </div>
            <div id="titulo_tres">

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Insira seu nome" />
                <label for="nome">E-mail:</label>
                <input type="text" id="nome" name="nome" placeholder="Insira seu e-mail" />
                <label for="nome">Assunto:</label>
                <input type="text" id="nome" name="nome" placeholder="Insira o assunto" />
                <label for="nome">Mensagem:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite sua mensagem aqui" />
                <div id="botao">
                    <button>Enviar</button>
                </div>


            </div>
        </div>


    )
}

export default Pagina_inicial