import React from 'react';
import { Button } from 'reactstrap';

import ProductAPI from '../api/ProductAPI';
import { CartContext } from '../contexts/Cart';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: ""
		}
	}

	componentDidMount() {
		this.getProduct().then(product => {
			console.log(product);
		})
	}

	getProduct = async () => {
		const product = await ProductAPI.getProduct(this.props.match.params.id);
		console.log(product);
		this.setState({
			product: product,
		})
		console.log(this.state.product);
	}

	render() {
		return (
			<div className='container' style={{ paddingTop: '80px' }}>
				<div className='row'>
					<div className='col-md-4'>
						<img src={this.state.product.imgUrl} alt='img' width='300px' height='300px'></img>
					</div>
					<div className='col-md-8'>
						<h1> {this.state.product.name} </h1>
						<br />
						<h4> {this.state.product.description} </h4>
						<br />
						<h5><strong>Price: {this.state.product.price}</strong></h5>
						<br />
						<CartContext.Consumer>
							{({ addToCart }) => (
								<Button onClick={() => addToCart(this.state.product)}>
									Add to cart
								</Button>
							)}
						</CartContext.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;