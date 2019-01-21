import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import {CartContext} from '../contexts/Cart';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
                    <a className='navbar-brand' href='/'>Shopping</a>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item active' style={{paddingRight: '15px'}}>
                                <Link to='/'>Home</Link>
                                {/* <a href='/'>Home</a> */}
                            </li>
                            <li className='nav-item' style={{paddingRight: '15px'}}>
                                <Link to='/products'>Products</Link>
                                {/* <a href='products'>Products</a> */}
                            </li>
                            <li className='nav-item' style={{paddingRight: '15px'}}>
                                <Link to='/about'>About</Link>
                                {/* <a href='/about'>About</a> */}
                            </li>
                        </ul>
                        <form className='form-inline'>
                            <input className='form-control mr-sm-2' type='search' placeholder='search'/>
                            <button className='btn btn-outline-success my-2 my-sm-0' type='Submit'>Search</button>
                        </form>
                    </div>
                    <li className='nav-item' style={{padding: '0 15px', listStyle: 'none'}}>
                        <CartContext.Consumer>
                            {({cartItems}) => (
                                <Link to='/cart'>Cart ({cartItems.length})</Link>
                            )}
                        </CartContext.Consumer>
                    </li>
                </nav>
            </header>
        );
    }
}

export default Header;