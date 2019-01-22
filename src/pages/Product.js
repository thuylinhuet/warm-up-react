import React from 'react';

import ProductAPI from '../api/ProductAPI';
import { CartContext } from '../contexts/Cart';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: ""
		}

		this.deleteProduct = this.deleteProduct.bind(this);
		this.updateProduct = this.updateProduct.bind(this);
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

	async deleteProduct(product) {
		console.log('delete this product');
		await ProductAPI.deleteProduct(product);
		this.props.history.push({ pathname: '/products' })
	}

	updateProduct(product) {
		this.props.history.push({ pathname: `/products/${product._id}/update` })
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
						<div className='row' style={{ justifyContent: 'space-evenly' }}>
							<CartContext.Consumer>
								{({ addToCart }) => (
									<button className='btn btn-primary' onClick={() => addToCart(this.state.product)}>
										Add to cart
								</button>
								)}
							</CartContext.Consumer>

							<button className='btn btn-danger' onClick={() => this.deleteProduct(this.state.product)}>
								Delete
							</button>
							<button className='btn btn-success' onClick={() => this.updateProduct(this.state.product)}>
								Update
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;