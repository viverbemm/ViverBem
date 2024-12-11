import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';


import { criarUsuario, logarUsuario, mostrarUmUsuario, mostrarUsuario, deletarUsuario, atualizarUsuario} from './controllers/UsuarioController.js';
import { criarImagem, mostrarImagem, editarImagem, deletarImagem, mostrarUmaImagem } from './controllers/ImagemController.js';
import { atualizarPerfil, criarPerfil, deletarPerfil, downloadImagem, mostrarPerfil, mostrarUmPerfil } from './controllers/PerfilController.js';



const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());  // Adicionando o middleware para lidar com uploads de arquivos
app.use(cors());
// Rota para upload de imagens
app.post('/upload', criarImagem);

// Rota para visualizar todas as imagens
app.get('/imagens', mostrarImagem);

// Rota para visualizar uma imagem específica
app.get('/imagens/:id_imagem', mostrarUmaImagem);

// Rota para editar uma imagem existente
app.put('/imagens/:id_imagem', editarImagem);

// Rota para excluir uma imagem
app.delete('/imagens/:id_imagem', deletarImagem);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



//CRUD usuario
app.post('/usuario',criarUsuario);
app.get('/usuario',mostrarUsuario);
app.get('/usuario/:id_usuario',mostrarUmUsuario);
app.delete('/usuario/:id_usuario', deletarUsuario);
app.put ('/usuario/:id_usuario', atualizarUsuario);


// CRUD perfil
app.post('/perfil',criarPerfil);
app.get('/perfil',mostrarPerfil);
app.get('/perfil/:id_dado',mostrarUmPerfil);
app.delete('perfil/:id_dado', deletarPerfil);
app.put('/perfil/:id_dado', atualizarPerfil);


//CRUD imagem
app.post('/upload', criarImagem);
app.get('/imagens', mostrarImagem);
app.get('/imagens/:id_imagem', mostrarUmaImagem);
app.put('/imagens/:id_imagem', editarImagem);
app.delete('/imagens/:id_imagem', deletarImagem);

app.get('/public/:nomeImg', downloadImagem);


// //Efetuar login
app.post('/login',logarUsuario);

// app.listen(porta, ()=>{
//     console.log(`API Rodando na porta ${porta}`)
// });
