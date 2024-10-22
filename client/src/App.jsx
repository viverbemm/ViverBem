import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_vindo from './components/pages/Bem_Vindo';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login from './components/pages/Login';
import Tela_Cadastro from './components/pages/Tela_Cadastro';
import Login_Seg from './components/pages/Login_Seg';



function App() {
  return (
        <Router>
          <Routes>
            <Route path='/Bem_vindo' element={<Bem_vindo/>} /> 
            <Route path='/Atualizar' element={<Atualizar/>} /> 
            <Route path='Controle' element={<Controle_Usuarios/>}/>
            <Route path='Financeiro' element={<Financeiro/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Cadastro' element={<Tela_Cadastro/>}/>
         
          </Routes>
        </Router> 
  );
}

export default App;