import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil_Profissional from './components/pages/Perfil_profissional';
import Tela_profissionais from './components/pages/Tela_profissionais';
import Tela_agendamentos from './components/pages/Tela_agendamentos';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Completar_Perfil from './components/pages/Completar_Perfil';
import Bem_Vindo_Gestao from './components/pages/Bem_Vindo_Gestao';
import Perfil_Completo from './components/pages/Perfil_Completo';
import PaginaInicial from './components/pages/PaginaInicial';
import Login_Usuario from './components/pages/LoginUsuario';
import Login_Gestao from './components/pages/Login_Gestao';
import EditCadastro from './components/pages/EditCadastro';
import MinhaConta from './components/pages/MinhaConta';
import Financeiro from './components/pages/Financeiro';
import AlterarSenha from './components/AlterarSenha';
import ConfigConta from './components/pages/Config';
import Laura from './components/pages/Laura_Castro';
import Carlos from './components/pages/Carlos_Mendes';
import Gabriel from './components/pages/Gabriel_Lopes';
import Cadastro from './components/pages/Cadastro';

import Pag_Men from './components/pages/Pag_Men';
import Config from './components/pages/Config';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/perfil_profissional/:nome" element={<Perfil_Profissional />} />
        <Route path='/Perfil_Profissional' element={<Perfil_Profissional />} />
        <Route path='/tela_profissionais' element={<Tela_profissionais />} />
        <Route path='/tela_agendamentos' element={<Tela_agendamentos />} />
        <Route path='/CompletarPerfil' element={<Completar_Perfil />} />
        <Route path='/EditCadastro/:id' element={<EditCadastro />} />
        <Route path='/PaginaInicial' element={<PaginaInicial />} />
        <Route path='/Bem_vindo' element={<Bem_Vindo_Gestao />} />
        <Route path='/Controle' element={<Controle_Usuarios />} />
        <Route path='/LoginUsuario' element={<Login_Usuario />} />
        <Route path='/Login_gestao' element={<Login_Gestao />} />
        <Route path='/AlterarSenha' element={<AlterarSenha />} />
        <Route path='/Perfil' element={<Perfil_Completo />} />
        <Route path='/Financeiro' element={<Financeiro />} />
        <Route path='/MinhaConta' element={<MinhaConta />} />
        <Route path='/Carlos_Mendes' element={<Carlos />} />
        <Route path='/Gabriel_Lopes' element={<Gabriel />} />
        <Route path='/Laura_Castro' element={<Laura />} />
        <Route path='/Config' element={<ConfigConta />} />
        <Route path='/Pagamento' element={<Pag_Men />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/Config' element={<Config />} />
      </Routes>
    </Router>
  );
}

export default App;