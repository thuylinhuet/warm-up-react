import React from 'react';
import { Container } from 'reactstrap';

import ProductAPI from '../api/ProductAPI';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: ProductAPI.get(
				parseInt(props.match.params.id, 10)
			)
		}
		console.log(this.props.match.params.id);
	}

	render() {
		return (
			<Container>
			<h1>{this.props.match.params.id}</h1>
				{/* <div className='col-md-4'>
					<img src={this.state.product.imgUrl} alt='img'></img>
				</div>
				<div className='col-md-8'>
					<h1> {this.state.product.name} </h1>
					<br />
					<h4> {this.state.product.description} </h4>
					<h5><strong>Price: 150$</strong></h5>
				</div> */}
				
			</Container>
		);
	}
}

export default Product;