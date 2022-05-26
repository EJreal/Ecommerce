import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">Biblioteca Gabriel Garcia Marquez</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Carrito</a>
            <a href="signin.html"> Ingresar </a>
          </div>
        </header>

        <main className="main">
          <div className="content">
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/' exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">Todos los derechos reservados.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
