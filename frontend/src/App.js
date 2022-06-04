import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';

function App() {


  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">Biblioteca Gabriel Garcia Marquez</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Carrito</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Iniciar sesion</Link>
            }

          </div>
        </header>

        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />

            <Route path='/product/:id' component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">Todos los derechos reservados.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
