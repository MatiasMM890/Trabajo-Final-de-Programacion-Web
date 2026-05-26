import React from 'react';

function Header() {
  return (
    <header className="barra">
      <div className="barra-logo">
        ULima Bookstore
      </div>

      <div className="barra-buscar">
        <input type="text" placeholder="Buscar libros, autores, materias..." />
      </div>

      <nav className="barra-menu">
        <a href="#" className="nav-link">Inicio</a>
        <a href="#" className="nav-link">Publicar libro</a>
        <button className="boton-login">Iniciar sesión</button>
      </nav>
    </header>
  );
}

export default Header;