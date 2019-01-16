import React from 'react';

import './Product.css';

class Product extends React.Component {
	render() {
		return (
			<div className='product-info text-center'>
				<a href='/'>
					<div className='image'>
					</div>
					<h5>Product Item</h5>
					<p>the brown fox jumps over the lazy dog</p>
					<p>Price: 250$</p>
				</a>
			</div>
		);
	}
}

export default Product;