import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './Home';
import ProductList from '../pages/ProductList';
import About from '../pages/About';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		alert('Custom want to find: ' + this.state.value);
		e.preventDefault();
	}
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
							<form className='form-inline' onSubmit={this.handleSubmit}>
								<input className='form-control mr-sm-2' type='search' placeholder='search' value={this.state.value}
									onChange={this.handleChange} />
								<button className='btn btn-outline-success my-2 my-sm-0' type='Submit'>Search</button>
							</form>
						</div>
					</nav>

					<Route exact path='/' component={Home} />
					<Route path='/products' component={ProductList} />
					<Route path='/about' component={About} />
				</div>
			</Router>
		);
	}
}

export default Header;