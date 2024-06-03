import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pagina_inicial from './views/Pagina_inicial';
import Tela_cliente from './views/Tela_cliente';
import Teste from './views/Teste';
import Tela_login from './views/Tela_login';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pagina_inicial />} />

        <Route path='/Tela_cliente' element={<Tela_cliente />} />

        <Route path='/Tela_login' element={<Tela_login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
