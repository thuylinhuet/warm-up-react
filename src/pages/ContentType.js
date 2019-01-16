import React from 'react';

import Product from './Product';

class ContentType extends React.Component {
	render() {
		return (
			<div id='content-type'>
				<h2>
					{this.props.match.params.namegroup}
				</h2>
				<div className='row'>
					<div className='col-md-3'>
						<Product />
					</div>
					<div className='col-md-3'>
						<Product />
					</div>
					<div className='col-md-3'>
						<Product />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-3'>
						<Product />
					</div>
					<div className='col-md-3'>
						<Product />
					</div>
					<div className='col-md-3'>
						<Product />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-3'>
						<Product />
					</div>
					<div className='col-md-3'>
						<Product />
					</div>
					<div className='col-md-3'>
						<Product />
					</div>
				</div>
			</div>
		)
	}
}

export default ContentType;