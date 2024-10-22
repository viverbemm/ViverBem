import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_vindo from './components/pages/Bem_Vindo';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import LoginUsuario from './components/pages/LoginUsuario';
import Perfil_Profissional from './components/pages/Perfil_Profissional';





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Bem_vindo />} />
        <Route path='/Atualizar' element={<Atualizar />} />
        <Route path='/Controle' element={<Controle_Usuarios />} />
        <Route path='/Financeiro' element={<Financeiro />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/EditCadastro/:id' element={<EditCadastro />} />
        <Route path='/LoginUsuario' element={<LoginUsuario />} />
        <Route path='/Perfil_Profissional' element={<Perfil_Profissional />} />
        <Route path='Controle' element={<Controle_Usuarios />} />
        <Route path='Financeiro' element={<Financeiro />} />
        <Route path='Login' element={<Login />} />
        <Route path='Cadastro' element={<Tela_Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;