import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import ProductAPI from '../api/ProductAPI';
import { CartContext } from '../contexts/Cart';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}

		this.createProduct = this.createProduct.bind(this);
		this.deleteProduct = this.deleteProduct.bind(this);
	}

	componentDidMount() {
		// this.getProductList().then(product => {
		// 	console.log(product);
		// })
		this.getProductList()
	}

	getProductList = async () => {
		const productList = await ProductAPI.getProductList();
		this.setState({
			products: productList,
		})
	}

	createProduct = () => {
		console.log(this.props);
		this.props.history.push({ pathname: '/products/create' })
	}

	async deleteProduct(product) {
		console.log('delete');
		await ProductAPI.deleteProduct(product);
		const newProducts = this.state.products.filter(item => {
			return item !== product;
		});

		this.setState({
			products: [...newProducts]
		})
	}

	render() {
		return (
			<div className='container' style={{ padding: '70px' }}>
				<h2>Products</h2>
				<div>
					<button className='btn btn-success'
						onClick={() => this.createProduct()}>
						Create
					</button>
				</div>
				<br />

				 {/* (this.state.products.length !== 0) ? ( <h5>No product.</h5> ) :  */}
					<div className='row'>
					{this.state.products.map(product => (
						<div className='col-md-3 col-sm-2' key={product.id}>
							<div className='card'>
								<img className='card-img-top'
									width="100%"
									src={product.imgUrl}
									alt="Product cap" />
								<div className='card-body'>
									<h5 className='card-title'><Link to={`/products/${product._id}`}>{product.name}</Link></h5>
									<p className='card-text'>Price: {product.price}</p>
									<div className='row'>
										<CartContext.Consumer>
											{({ addToCart }) => (
												<button className='btn btn-primary' onClick={() => addToCart(product)}>
													Add to cart
											</button>
											)}
										</CartContext.Consumer>
										<button className='btn btn-danger' onClick={() => this.deleteProduct(product)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ProductList;