import { Link } from "react-router-dom";
import closeIcon from "../img/close-icon.svg";
import openIcon from "../img/hamburger-icon.svg";
import { useState } from "react";
import "../styles/header.css";

export function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <div className="logo-container">
            <div className="img-container-logo">
              <img src="../../public/logo jimbo.jpeg" alt="logo" />
            </div>
            <h1 className="logo">Estación Sur</h1>
          </div>
        </Link>
        <button
          className="open-menu"
          aria-label="abrir menú"
          onClick={() => toggleMenu()}
        >
          <img src={openIcon} alt="abrir menú" />
        </button>
        <ul className={`menu ${menu ? "menu-opened" : ""}`}>
          <button
            className="close-menu"
            aria-label="cerrar menú"
            onClick={() => toggleMenu()}
          >
            <img src={closeIcon} alt="cerrar menú" />
          </button>
          <li onClick={() => toggleMenu()}>
            <Link to="/" className="selected">
              Inicio
            </Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/higene&hogar">Higene & Hogar</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/indumentaria">Indumentaria</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/electrodomesticos">Electrodomesticos</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/tecnologia">Tecnologia</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/otros">Otros</Link>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
