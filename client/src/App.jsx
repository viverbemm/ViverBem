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
import Login_Princ from './components/pages/Login_Princ';
import Menu_superior from './components/pages/Menu_superior';
import Config from './components/pages/Config';


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
            <Route path= '/Login_princ' element={<Login_Princ/>}/>
            <Route path= '/Menu_superior' element={<Menu_superior/>}/>
            <Route path= '/Config' element={<Config/>}/>
          
          </Routes>
        </Router> 
  );
}

export default App;