import React from 'react';

function LibroCard(props) {
  return (
    <article className="libro-card">
      <div className="libro-imagen-contenedor">
        <img src={props.imagen} alt={props.titulo} className="libro-imagen" />
      </div>
      <h3 className="libro-titulo">{props.titulo}</h3>
      <p className="libro-autor">{props.autor}</p>
      <p className="libro-precio">{props.precio}</p>
    </article>
  );
}

export default LibroCard;