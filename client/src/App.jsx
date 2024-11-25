import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bem_Vindo_Gestao from './components/pages/Bem_Vindo_Gestao';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login_Gestao from './components/pages/Login_Gestao';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import LoginUsuario from './components/pages/LoginUsuario';
import Tela_profissionais from './components/pages/Tela_profissionais';
import Tela_agendamentos from './components/pages/Tela_agendamentos';
import Perfil_Profissional from './components/pages/Perfil_profissional';
import Login_Usuario from './components/pages/LoginUsuario';
import Config from './components/pages/Config';
import Pag_Men from './components/pages/Pag_Men';
import Completar_Perfil from './components/pages/Completar_Perfil';
import PaginaInicial from './components/pages/PaginaInicial';
import MinhaConta from './components/pages/MinhaConta';
import Perfil_Completo from './components/pages/Perfil_Completo';
import AlterarSenha from './components/AlterarSenha';
import ConfigConta from './components/pages/Config';





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
            <Route path="/perfil_profissional/:nome" element={<Perfil_Profissional />} />
            <Route path='/Perfil_Profissional' element={<Perfil_Profissional/>}/>
            <Route path='/tela_agendamentos' element={<Tela_agendamentos/>}/>
            <Route path='/Config' element={<Config/>}/>
            <Route path='/Login_gestao' element={<Login_Gestao/>}/>
            <Route path='/Pagamento' element={<Pag_Men/>}/>
            <Route path='/CompletarPerfil' element={<Completar_Perfil/>}/>
            <Route path='/' element={<PaginaInicial/>}/>
            <Route path='/Perfil' element={<Perfil_Completo/>}/>
            <Route path='/PaginaInicial' element={<PaginaInicial/>}/>
            <Route path='/MinhaConta' element={<MinhaConta/>}/>
            <Route path='/AlterarSenha' element={<AlterarSenha/>}/>
            <Route path='/Config' element={<ConfigConta/>}/>
          
          
          </Routes>
        </Router> 
  );
}

export default App;