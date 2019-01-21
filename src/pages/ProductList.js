import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
	Container, Row, Col,
	Card, CardImg, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';

import Product from './Product';
import ProductAPI from '../api/ProductAPI';
import { CartContext } from '../contexts/Cart';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	}

	componentDidMount(){
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

	render() {
		return (
			<Router>
				<Container style={{paddingTop:'80px'}}>
					<h2>Products</h2>
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
			</Router>
		);
	}
}

export default ProductList;