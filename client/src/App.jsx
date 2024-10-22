import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_vindo from './components/pages/Bem_Vindo';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import EditCadastro from './components/pages/EditCadastro';
<<<<<<< HEAD
import LoginUsuario from './components/pages/LoginUsuario';
import Tela_profissionais from './components/pages/Tela_profissionais';
import Perfil_profissional from './components/pages/Perfil_profissional';



=======
import Perfil_Profissional from './components/pages/Perfil_Profissional';
>>>>>>> 3766b76105c29e24fdef3dfa7e835e72f47d04da

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/Bem_vindo' element={<Bem_vindo/>} /> 
            <Route path='/Atualizar' element={<Atualizar/>} /> 
            <Route path='/Controle' element={<Controle_Usuarios/>}/>
            <Route path='/Financeiro' element={<Financeiro/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/EditCadastro/:id' element={<EditCadastro/>}/>
<<<<<<< HEAD
            <Route path='/LoginUsuario' element={<LoginUsuario/>}/>
            <Route path='/tela_profissionais' element={<Tela_profissionais/>}/>
=======
            <Route path='/Perfil_Profissional' element={<Perfil_Profissional/>}/>
>>>>>>> 3766b76105c29e24fdef3dfa7e835e72f47d04da
          
          </Routes>
        </Router> 
  );
}

export default App;