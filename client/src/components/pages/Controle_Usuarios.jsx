import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div>
                    <span className="navbar-brand">logo</span>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="">Início</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Sobre nós</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Contato</a></li>
                </ul>
            </nav>
            <h1>Controle de Clientes</h1>
            {/* <button className="btn btn-primary">Enviar</button>
            <a href="http://google.com" className="btn btn-success">Google</a> */}
            <br />
            <input type="text" className="form-control" placeholder="Pesquisar:" />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Nome</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ATIVO</td>
                        <td>Maria Isabel de Paula Barbara</td>
                        <td>182.596.548-89</td>
                    </tr>
                    <tr>
                        <td>INATIVO</td>
                        <td>Vitor Vargas Parajara</td>
                        <td>198.568.723-65</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Sarah Monteiro Duque</td>
                        <td>148.726.248-21</td>
                    </tr>
                    <tr>
                        <td>INATIVO</td>
                        <td>Matheus Sarti Brunelli</td>
                        <td>176.564.187-45</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Gabriel de Assis Sperandio</td>
                        <td>147.523.698-47</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Antônio Silva Souza</td>
                        <td>005.158.865-27</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Afrânio Gomes</td>
                        <td>014.578.321-58</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Maurício Jesus Davel</td>
                        <td>248.564.298-49</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Gregory Veloso Silva</td>
                        <td>265.498.267-62</td>
                    </tr>
                    <tr>
                        <td>INATIVO</td>
                        <td>Anna Julya Silva</td>
                        <td>163.657.421-06</td>
                    </tr>
                    <tr>
                        <td>INATIVO</td>
                        <td>Heloisa Rangel Guimarães</td>
                        <td>106.214.159-09</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Marco Antônio Santos</td>
                        <td>154.065.008-79</td>
                    </tr>
                    <tr>
                        <td>ATIVO</td>
                        <td>Elson Barbara</td>
                        <td>160.396.678-90</td>
                    </tr>
                </tbody>
            </table>
            <div id="senai-carrossel" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://senaies.com.br/wp-content/uploads/2024/06/Banner-full_Matriculas_SENAI-1.png" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://senaies.com.br/wp-content/uploads/2024/05/Banner-Site_Senai-Porto.png" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://senaies.com.br/wp-content/uploads/2024/04/Banner_Card1_desktop_1250x250px.png" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#senai-carrossel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#senai-carrossel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default App;
