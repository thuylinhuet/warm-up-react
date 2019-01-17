import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import About from '../pages/About';
import Cart from '../pages/Cart';
import { CartContext } from '../contexts/Cart';

class Header extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<a className='navbar-brand' href='/'>Shopping</a>
						<div className='collapse navbar-collapse'>
							<ul className='navbar-nav mr-auto'>
								<li className='nav-item active' style={{ paddingRight: '15px' }}>
									<Link to='/'>Home</Link>
								</li>
								<li className='nav-item' style={{ paddingRight: '15px' }}>
									<Link to='/products'>Products</Link>
								</li>
								<li className='nav-item' style={{ paddingRight: '15px' }}>
									<Link to='/about'>About</Link>
								</li>
							</ul>
							<form className='form-inline'>
								<input className='form-control mr-sm-2' type='search' placeholder='search' />
								<button className='btn btn-outline-success my-2 my-sm-0' type='Submit'>Search</button>
							</form>
						</div>
						<li className='nav-item' style={{ padding: '0 15px', listStyle: 'none' }}>
							<CartContext.Consumer>
								{({ cartItems }) => (
									<Link to='/cart'>Cart ({cartItems.length})</Link>
								)}
							</CartContext.Consumer>
						</li>
					</nav>

					<Route exact path='/' component={Home} />
					<Route path='/products' component={ProductList} />
					<Route path='/about' component={About} />
					<Route path='/cart' component={Cart} />
				</div>
			</Router>
		);
	}
}

export default Header;