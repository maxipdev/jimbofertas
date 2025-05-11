import { Link } from 'react-router-dom'
import closeIcon from '../img/close-icon.svg'
import openIcon from '../img/hamburger-icon.svg'
import { useState } from 'react'

export function Header () {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
        <nav>
          <a href="" className='logo'>Jimbofertas</a>
          <button className='open-menu' aria-label='abrir menú' onClick={()=> toggleMenu()} >
            <img src={openIcon} alt="abrir menú" />
          </button>
          <ul className={`menu ${menu ? 'menu-opened' : ''}`}>
            <button className='close-menu' aria-label='cerrar menú' onClick={()=> toggleMenu()} >
              <img src={closeIcon} alt="cerrar menú" />
            </button>
            <li><Link to="/" className='selected'>Inicio</Link></li>
            <li><Link to="/a">Higene & Hogar</Link></li>
            <li><Link to="/b">Indumentaria</Link></li>
            <li><Link to="/c">Dispositivos Electrónicos</Link></li>
          </ul>
        </nav>
      </header>
    )
}