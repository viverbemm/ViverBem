import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';


import { criarUsuario, logarUsuario, mostrarUmUsuario, mostrarUsuario, deletarUsuario, atualizarUsuario } from './controllers/UsuarioController.js';


const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('API Funcionando!')
});

//app.get('/public/:nomeImg',downloadImagem);

//CRUD usuario
app.post('/usuario',criarUsuario);
app.get('/usuario',mostrarUsuario);
app.get('/usuario/:id_usuario',mostrarUmUsuario);
app.delete('/usuario/:id_usuario', deletarUsuario);
app.put ('/usuario/:id_usuario', atualizarUsuario);



//Efetuar login
app.post('/login',logarUsuario);

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});