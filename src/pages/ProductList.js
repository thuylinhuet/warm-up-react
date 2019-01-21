import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
	Container, Row, Col,
	Card, CardImg, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';

import ProductAPI from '../api/ProductAPI';
import { CartContext } from '../contexts/Cart';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}

		this.createProduct = this.createProduct.bind(this);
	}

	componentDidMount() {
		this.getProductList().then(product => {
			console.log(product);
		})
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

	render() {
		return (
			<Container style={{ padding: '70px' }}>
				<h2>Products</h2>
				<div>
					<button className='btn btn-success'
						onClick={() => this.createProduct()}>
						Create
					</button>
				</div>
				<br />
				<Row>
					{this.state.products.map(product => (
						<Col md='3' sm='2' key={product.id}>
							<Card>
								<CardImg top
									width="100%"
									src={product.imgUrl}
									alt="Card image cap" />
								<CardBody>
									<CardTitle><Link to={`/products/${product._id}`}>{product.name}</Link></CardTitle>
									<CardText>Price: {product.price}</CardText>
									<CartContext.Consumer>
										{({ addToCart }) => (
											<Button onClick={() => addToCart(product)}>
												Add to cart
											</Button>
										)}
									</CartContext.Consumer>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}

export default ProductList;