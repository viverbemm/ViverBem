import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_Vindo_Gestao from './components/pages/Bem_Vindo_Gestao';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import Login_Usuario from './components/pages/Login_Usuario';
import Tela_Profissionais from './components/pages/Tela_Profissionais';
import Perfil_Profissional from './components/pages/Perfil_Profissional';
import Tela_Agendamentos from './components/pages/Tela_Agendamentos';
import Menu_superior from './components/pages/Menu_superior';
import Tela_Pagamentos from './components/pages/Tela_Pagamentos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Bem_vindo' element={<Bem_Vindo_Gestao />} />
        <Route path='/Atualizar' element={<Atualizar />} />
        <Route path='/Controle' element={<Controle_Usuarios />} />
        <Route path='/Financeiro' element={<Financeiro />} />
        <Route path='/Login' element={<Login_Usuario />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/EditCadastro/:id' element={<EditCadastro />} />
        <Route path='/LoginUsuario' element={<Login_Usuario />} />
        <Route path='/Tela_Profissionais' element={<Tela_Profissionais />} />
        <Route path='/Perfil_Profissional' element={<Perfil_Profissional />} />
        <Route path='/Tela_Agendamentos' element={<Tela_Agendamentos />} />
        <Route path='/Menu_superior' element={<Menu_superior />} />
        <Route path='/Tela_Pagamentos' element={<Tela_Pagamentos />} />
      </Routes>
    </Router>
  );
}

export default App;