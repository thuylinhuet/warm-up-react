import React, { Component } from 'react';
import './App.css';

import { CartProvider } from '../contexts/Cart';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <div className='App'>
          <Header />
        </div>
      </CartProvider>

    )
  }
}

export default App;
