import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { CartProvider } from '../contexts/Cart';
import Header from './Header';
import Product from '../pages/Product';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import About from '../pages/About';
import Cart from '../pages/Cart';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <div className='App'>
          <Header />
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/products/:id' component={Product} />
              <Route path='/products' component={ProductList} />
              <Route path='/about' component={About} />
              <Route path='/cart' component={Cart} />
            </Switch>
          </Router>
        </div>
      </CartProvider>
    )
  }
}

export default App;
