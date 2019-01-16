import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import ProductList from '../pages/ProductList';
import About from '../pages/About';

class Main extends React.Component {
	render() {
		return (
			<div className='container'>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/products' component={ProductList} />
						<Route path='/about' component={About} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default Main;