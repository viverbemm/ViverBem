import React from 'react';
import styles from './NavBar.module.css'; 
import { NavLink } from 'react-router-dom';


function navbar() {
    return (
        <div className={`bg-primary ${styles.menu_navegacao}`}>
            <nav className='container navbar navbar-expand-lg px-2'>
                <div>
                    <span className='navbar-brand'>Nome Usuário</span>
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='menu' className='collapse navbar-collapse container text-center'>
                <ul className='navbar-nav mx-auto'>
                    <li className='navbar-item'><NavLink className='nav-link' to="/">Inicio</NavLink></li>
                    <li className='navbar-item'><NavLink  className='nav-link' to="/login">Login</NavLink></li>
                  
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar;