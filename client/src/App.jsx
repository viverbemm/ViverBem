import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_vindo_gestao from './components/pages/Bem_Vindo_Gestao';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login_Gestao from './components/pages/Login_Gestao';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import LoginUsuario from './components/pages/LoginUsuario';
import Tela_profissionais from './components/pages/Tela_profissionais';
import Perfil_Profissional from './components/pages/Perfil_profissional';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginUsuario />} />
        <Route path='/Gestao' element={<Bem_vindo_gestao />} />
        <Route path='/Atualizar' element={<Atualizar />} />
        <Route path='/Controle' element={<Controle_Usuarios />} />
        <Route path='/Financeiro' element={<Financeiro />} />
        <Route path='/Login_Gestao' element={<Login_Gestao />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/EditCadastro/:id' element={<EditCadastro />} />
        <Route path='/tela_profissionais' element={<Tela_profissionais />} />
        <Route path='/perfil_Profissional' element={<Perfil_Profissional />} />
      </Routes>
    </Router>
  );
}

export default App;