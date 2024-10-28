import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_Vindo_Gestao from './components/pages/Bem_Vindo_Gestao';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import Login_Usuario from './components/pages/Login_Usuario';
import Tela_profissionais from './components/pages/Tela_profissionais';
<<<<<<< HEAD
import Config from './components/pages/Config';
=======
import Completar_Perfil from './components/pages/Completar_Perfil';

>>>>>>> f75587326a006c76a5f10c6d093bacebc0e8cfcd




function App() {
  return (
        <Router>
          <Routes>
            <Route path='/Bem_vindo' element={<Bem_Vindo_Gestao/>} /> 
            <Route path='/Atualizar' element={<Atualizar/>} /> 
            <Route path='/Controle' element={<Controle_Usuarios/>}/>
            <Route path='/Financeiro' element={<Financeiro/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/EditCadastro/:id' element={<EditCadastro/>}/>
            <Route path='/LoginUsuario' element={<Login_Usuario/>}/>
            <Route path='/tela_profissionais' element={<Tela_profissionais/>}/>
<<<<<<< HEAD
            <Route path='/Config' element={<Config/>}/>
            
=======
            <Route path='/CompletarPerfil' element={<Completar_Perfil/>}/>
           

>>>>>>> f75587326a006c76a5f10c6d093bacebc0e8cfcd
          
          </Routes>
        </Router> 
  );
}

export default App;