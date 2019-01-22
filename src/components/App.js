import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import {CartProvider} from '../contexts/Cart';
import Header from './Header';
import Product from '../pages/Product';
import Home from '../pages/Home';
import CreateForm from '../pages/CreateForm';
import ProductList from '../pages/ProductList';
import About from '../pages/About';
import Cart from '../pages/Cart';
import UpdateForm from '../pages/UpdateForm';

class App extends Component {
    render() {
        return (
            <Router>
                <CartProvider>
                    <div className='App'>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/products/create' component={CreateForm}/>
                            <Route exact path='/products/:id/update' component={UpdateForm}/>
                            <Route exact path='/products/:id' component={Product}/>
                            <Route path='/products' component={ProductList}/>
                            <Route path='/about' component={About}/>
                            <Route path='/cart' component={Cart}/>
                        </Switch>
                    </div>
                </CartProvider>
            </Router>
        )
    }
}

export default App;
