import { Link } from 'react-router-dom'
import closeIcon from '../img/close-icon.svg'
import openIcon from '../img/hamburger-icon.svg'
import { useState } from 'react'
import '../styles/header.css'

export function Header () {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
        <nav>
          <Link to="/" className='logo'>Jimbofertas</Link>
          <button className='open-menu' aria-label='abrir menú' onClick={()=> toggleMenu()} >
            <img src={openIcon} alt="abrir menú" />
          </button>
          <ul className={`menu ${menu ? 'menu-opened' : ''}`}>
            <button className='close-menu' aria-label='cerrar menú' onClick={()=> toggleMenu()} >
              <img src={closeIcon} alt="cerrar menú" />
            </button>
            <li onClick={()=> toggleMenu()}><Link to="/" className='selected'>Inicio</Link></li>
            <li onClick={()=> toggleMenu()}><Link to="/higene&hogar">Higene & Hogar</Link></li>
            <li onClick={()=> toggleMenu()}><Link to="/indumentaria">Indumentaria</Link></li>
            <li onClick={()=> toggleMenu()}><Link to="/electrodomesticos">Electrodomesticos</Link></li>
            <li onClick={()=> toggleMenu()}><Link to="/tecnologia">Tecnologia</Link></li>
          </ul>
        </nav>
      </header>
    )
}