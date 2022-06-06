import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {


  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <img src="/book.png" className="header-img"></img>
            <Link to="/">Biblioteca Gabriel Garcia Marquez</Link>
          </div>
          <div className="header-links" >
            <Link className='car' to="/cart/"><img src="/carrito2.png" className="header-img"></img>
            </Link>
            {
              userInfo ? <Link to="/products"><img src="/user2.gif" className="header-img"></img>{/* {userInfo.name} */}</Link> :
                <Link className='d'  to="/signin">Iniciar sesion</Link>
            }

          </div>
        </header>

        <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">Todos los derechos reservados. Biblioteca Garcia Marquez 2022.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
