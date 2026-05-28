// src/App.jsx
import React from 'react';
// Importamos las herramientas de enrutamiento
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos nuestros componentes
import Header from './components/Header';
import LibroCard from './components/LibroCard';
import LibroDetalle from './components/LibroDetalle';
import { libros } from './data/libros'; // Importamos la lista de libros

import './App.css';

// Hemos separado la pantalla de Inicio en su propio componente interno para más limpieza
function Inicio() {
  return (
    <>
      <section className="bienvenida">
        <h1>Bienvenido a ULima Bookstore</h1>
        <p>ULima Bookstore es una página web para la compra y venta de libros de 2da mano entre los alumnos de la Universidad de Lima.</p>
        <p>En la parte de abajo encontrarás las publicaciones más recientes. También puedes usar la barra de búsqueda en la parte superior si tienes algún libro en mente.</p>
        <p>No olvides Iniciar sesión o crear tu cuenta para poder usar todas las funcionalidades de la tienda.</p>
      </section>

      <section className="seccion-recientes">
        <h2 className="titulo-seccion">Publicaciones más recientes</h2>
        <div className="grid-libros">
          {/* Hacemos un map sobre la lista de libros importada desde data/libros.js */}
          {libros.map((libro) => (
            <LibroCard 
              key={libro.id} 
              id={libro.id} // <-- MUY IMPORTANTE: pasamos el ID para que el Link funcione
              titulo={libro.titulo} 
              autor={libro.autor} 
              precio={libro.precio} 
              imagen={libro.imagen}
            />
          ))}
        </div>
      </section>
    </>
  );
}

// El componente App ahora actúa como nuestro controlador de rutas (Tráfico)
function App() {
  return (
    // BrowserRouter envuelve toda la aplicación para habilitar el manejo de URLs
    <BrowserRouter>
      {/* El Header se queda afuera de "Routes" porque queremos que se vea SIEMPRE */}
      <Header /> 
      
      <main style={{ padding: '20px' }}>
        {/* Routes evalúa la URL actual y decide qué componente pintar en pantalla */}
        <Routes>
          {/* Ruta base ("/"): Muestra el listado de libros */}
          <Route path="/" element={<Inicio />} />
          
          {/* Ruta dinámica ("/libro/:id"): Muestra los detalles de un libro específico */}
          <Route path="/libro/:id" element={<LibroDetalle />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;