import React from 'react';
import Header from './components/Header';
import LibroCard from './components/LibroCard';
import './App.css'; // Importamos los estilos que creamos en el Paso 2

function App() {
  
  const librosDePrueba = [
    { 
      id: 1, 
      titulo: "Batman: Three Jokers", 
      autor: "Geoff Johns", 
      precio: "S/ 45.00", 
      imagen: "/imagenes/threejokers.webp" 
    },
    { 
      id: 2, 
      titulo: "La Divina Comedia", 
      autor: "Dante Alighieri", 
      precio: "S/ 18.00", 
      imagen: "/imagenes/ladivinacomedia.webp" 
    },
    { 
      id: 3, 
      titulo: "Curso de programación Java", 
      autor: "Mariona Nadal", 
      precio: "S/ 30.00", 
      imagen: "/imagenes/cursojava.webp" 
    },
    { 
      id: 4, 
      titulo: "Batman: A Death in the Family", 
      autor: "Jim Starlin", 
      precio: "S/ 60.00", 
      imagen: "/imagenes/batmandeath.jpg" 
    },
    { 
      id: 5, 
      titulo: "Harry Potter y la Cámara Secreta", 
      autor: "J. K. Rowling", 
      precio: "S/ 60.00", 
      imagen: "/imagenes/harrypotter.webp" 
    }
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        
        {/* Sección de descripción centrada */}
        <section className="bienvenida">
          <h1>Bienvenido a ULima Bookstore</h1>
          <p>ULima Bookstore es una página web para la compra y venta de libros de 2da mano entre los alumnos de la Universidad de Lima.</p>
          <p>En la parte de abajo encontrarás las publicaciones más recientes. También puedes usar la barra de búsqueda en la parte superior si tienes algún libro en mente.</p>
          <p>No olvides Iniciar sesión o crear tu cuenta para poder usar todas las funcionalidades de la tienda.</p>
        </section>

        {/* Sección de Publicaciones Recientes */}
        <section className="seccion-recientes">
          <h2 className="titulo-seccion">Publicaciones más recientes</h2>
          
          <div className="grid-libros">
            {librosDePrueba.map((libro) => (
              <LibroCard 
                key={libro.id} 
                titulo={libro.titulo} 
                autor={libro.autor} 
                precio={libro.precio} 
                imagen={libro.imagen}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;