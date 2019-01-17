import React from 'react';

import { CartContext } from '../contexts/Cart';

class Cart extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Your Cart</h1>
        <div className='row'>
          <div className='col-md-7'>
            <h3>Items</h3>
          </div>
          <div className='col-md-2'>
            <h3>Quantity</h3>
          </div>
          <div className='col-md-2'>
            <h3>Price</h3>
          </div>
        </div>
        <hr />
        <CartContext.Consumer>
          {({ cartItems }) => (
            cartItems.length !== 0 ? (
              (cartItems).map(item => (
                <div className='row'>
                  <div className='col-md-2'>
                    <img src={item.imgUrl} style={{ width: '100px', height: '100px' }} alt='avt' />
                  </div>
                  <div className='col-md-5 text-left' >
                    <h5>{item.name}</h5>
                  </div>
                  <div className='col-md-2'>
                    <h5>1</h5>
                  </div>
                  <div className='col-md-2'>
                    <h5>$150</h5>
                  </div>
                  <div className='col-md-1'>
                    <CartContext.Consumer>
                      {({ removeFromCart }) => (
                        <button className='btn btn-danger'
                          onClick={() => removeFromCart(item)}>Delete</button>
                      )}
                    </CartContext.Consumer>

                  </div>
                </div>
              ))
            ) : (
              <h5 className='text-center'>
                Your cart is empty.
              </h5>
            ) 
          )}
        </CartContext.Consumer>
      </div>
    )

  }
}

export default Cart;