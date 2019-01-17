import React from 'react';

import { CartContext } from '../contexts/Cart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Your Cart</h1>
        <div className='row'>
          <div className='col-md-8'>
            <h3>Items</h3>
          </div>
          <div className='col-md-2'>
            <h3>Quantity</h3>
          </div>
          <div className='col-md-2'>
            <h3>Price</h3>
          </div>
        </div>
        <hr/>
        <CartContext.Consumer>
          {({ cartItems }) => (
            (cartItems).map(item => (
              <div className='row'>
                <div className='col-md-2'>
                  <img src={item.imgUrl} style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='col-md-6 text-left' >
                  <h5>{item.name}</h5>
                </div>
                <div className='col-md-2'>
                  <h5>1</h5>
                </div>
                <div className='col-md-2'>
                  <h5>$150</h5>
                </div>
              </div>
            ))
          )}
      </CartContext.Consumer>
      </div>
    )

  }
}

export default Cart;