import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atualizar from './components/pages/Atualizar';
import Bem_vindo from './components/pages/Bem_Vindo';
import Controle_Usuarios from './components/pages/Controle_Usuarios';
import Financeiro from './components/pages/Financeiro';
import Login from './components/pages/Login';
import Tela_Cadastro from './components/pages/Tela_Cadastro';
<<<<<<< HEAD
import Editar_Cadastro from './components/pages/Editar_Cadastro'
=======
import Login_Seg from './components/pages/Login_Seg';
>>>>>>> 62b9cc99752992e90e96532ea33730a2122468aa



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
<<<<<<< HEAD
            <Route path='Editar' element={<Editar_Cadastro/>}/>
=======
<<<<<<< HEAD
            <Route path='Login_Seg' element={<Login_Seg/>}/>         
=======
>>>>>>> 62b9cc99752992e90e96532ea33730a2122468aa
         
>>>>>>> b796b0d1ad7d44e238beb5c6c7aee241264be7ce
          </Routes>
        </Router> 
  );
}

export default App;