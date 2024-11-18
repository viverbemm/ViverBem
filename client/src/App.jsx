import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bem_Vindo_Gestao from './components/pages/Bem_Vindo_Gestao';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login_Gestao from './components/pages/Login_Gestao';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import LoginUsuario from './components/pages/LoginUsuario';
import Tela_profissionais from './components/pages/Tela_profissionais';
import Perfil_Profissional from './components/pages/Perfil_profissional';
import Login_Usuario from './components/pages/LoginUsuario';
import Config from './components/pages/Config';
import Pag_Men from './components/pages/Pag_Men';
import Completar_Perfil from './components/pages/Completar_Perfil';
import PaginaInicial from './components/pages/PaginaInicial';
import MinhaConta from './components/pages/MinhaConta';


function App() {
  return (
        <Router>
          <Routes>
            <Route path='/Bem_vindo' element={<Bem_Vindo_Gestao/>} /> 
            <Route path='/Controle' element={<Controle_Usuarios/>}/>
            <Route path='/Financeiro' element={<Financeiro/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/EditCadastro/:id' element={<EditCadastro/>}/>
            <Route path='/LoginUsuario' element={<Login_Usuario/>}/>
            <Route path='/tela_profissionais' element={<Tela_profissionais/>}/>
            <Route path='/Config' element={<Config/>}/>
            <Route path='/Login_gestao' element={<Login_Gestao/>}/>
            <Route path='/Pagamento' element={<Pag_Men/>}/>
            <Route path='/CompletarPerfil' element={<Completar_Perfil/>}/>
            <Route path='/PaginaInicial' element={<PaginaInicial/>}/>
            <Route path='/MinhaConta' element={<MinhaConta/>}/>
          
          </Routes>
        </Router> 
  );
}

export default App;