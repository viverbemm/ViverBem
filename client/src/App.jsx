import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_Vindo_Gestao from './components/pages/Bem_Vindo_Gestao';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
import Login_Usuario from './components/pages/Login_Usuario';
import Tela_profissionais from './components/pages/Tela_profissionais';
import Perfil_profissional from './components/pages/Perfil_profissional';
import Tela_agendamentos from './components/pages/Tela_agendamentos';
import Menu_superior from './components/pages/Menu_superior';
import Tela_pagamento from './components/pages/Tela_pagamento';

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
        <Route path='/Tela_profissionais' element={<Tela_profissionais />} />
        <Route path='/Perfil_profissional' element={<Perfil_profissional />} />
        <Route path='/Tela_agendamentos' element={<Tela_agendamentos />} />
        <Route path='/Menu_superior' element={<Menu_superior />} />
        <Route path='/Tela_pagamento' element={<Tela_pagamento />} />
      </Routes>
    </Router>
  );
}

export default App;