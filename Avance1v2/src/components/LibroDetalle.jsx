// src/components/LibroDetalle.jsx
import React from 'react';
// useParams nos permite capturar variables de la URL (en este caso, el ID del libro)
import { useParams, Link } from 'react-router-dom';
// Importamos nuestra lista de libros para buscar la información
import { libros } from '../data/libros';

function LibroDetalle() {
  // Extraemos el 'id' de la URL (ejemplo: si la URL es /libro/3, id valdrá "3")
  const { id } = useParams();
  
  // Buscamos en nuestra lista el libro cuyo ID coincida con el de la URL.
  // Usamos parseInt porque el ID de la URL es texto y el de nuestra lista es número.
  const libro = libros.find((item) => item.id === parseInt(id));

  // Si alguien ingresa una URL con un ID que no existe, mostramos un mensaje de error
  if (!libro) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Libro no encontrado</h2>;
  }

  // Si el libro existe, dibujamos la estructura de 2 columnas
  return (
    <div className="detalle-contenedor">
      
      {/* Botón para regresar al listado principal */}
      <Link to="/" className="boton-volver">← Volver al inicio</Link>

      <div className="detalle-contenido">
        {/* COLUMNA IZQUIERDA: La imagen en grande */}
        <div className="detalle-col-izq">
          <img src={libro.imagen} alt={libro.titulo} />
        </div>

        {/* COLUMNA DERECHA: Todos los detalles del libro */}
        <div className="detalle-col-der">
          <h1 className="detalle-titulo">{libro.titulo}</h1>
          <p className="detalle-info-item"><strong>Autor:</strong> {libro.autor}</p>
          <p className="detalle-info-item"><strong>Publicación:</strong> {libro.publicacion}</p>
          <p className="detalle-info-item"><strong>Vendedor:</strong> {libro.vendedor}</p>
          <p className="detalle-precio">{libro.precio}</p>
          
          <div className="detalle-descripcion-caja">
            <h3>Descripción:</h3>
            <p className="detalle-descripcion">{libro.descripcion}</p>
          </div>
          
          {/* Botón temporal de contacto (le daremos funcionalidad más adelante) */}
          <button className="boton-contactar">Contactar al vendedor</button>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;