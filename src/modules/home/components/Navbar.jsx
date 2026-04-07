import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../shared/assets/Logo.webp'
import './Home.css'

export const Navbar = () => {
  return (
    <nav>
        <li>
            <img src={Logo} alt=""  width="50px"  /></li>
        <li>

            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
        </li>
    </nav>


  )
}

export default Navbar