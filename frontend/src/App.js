import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';

function App() {
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
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
              userInfo ? <Link to="/profile">{userInfo.name}</Link> : <Link to="/signin">Iniciar Sesión</Link>
            }

          </div>
        </header>

        <main className="main">
          <div className="content">
            <Route path='/signin' component={SigninScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path='/' exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">Todos los derechos reservados.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
