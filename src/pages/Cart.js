import React from 'react';

import { CartContext } from '../contexts/Cart';

class Cart extends React.Component {
  render() {
    return (
      <div className='container' style={{paddingTop:'80px'}}>
        <h1 className='text-center'>Your Cart</h1>
        <hr />
        <div className='row'>
          <div className='col-md-7'>
            <h4>Items</h4>
          </div>
          <div className='col-md-2'>
            <h4>Quantity</h4>
          </div>
          <div className='col-md-2'>
            <h4>Price</h4>
          </div>
        </div>
        <hr />
        <CartContext.Consumer>
          {({ cartItems, removeFromCart }) => (
            cartItems.length !== 0 ? (
              (cartItems).map(item => (
                <div className='row'>
                  <div className='col-md-2'>
                    <img src={item.imgUrl}
                        style={{ width: '100px', height: '100px' }}
                        alt='avt'
                    />
                  </div>
                  <div className='col-md-5 text-left' >
                    <h6>{item.name}</h6>
                  </div>
                  <div className='col-md-2'>
                    <h6>1</h6>
                  </div>
                  <div className='col-md-2'>
                    <h6>{item.price}</h6>
                  </div>
                  <div className='col-md-1'>
                    <button className='btn btn-danger'
                      onClick={() => removeFromCart(item)}>
                      Delete
                    </button>
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
        <hr />
        <CartContext.Consumer>
          {
            ({ cartItems, total }) => (
              cartItems.length !== 0 ? (
                <div className='row'>
                  <div className='col-md-7'>
                    <h4>Total</h4>
                  </div>
                  <div className='col-md-2'>
                    <h4>{cartItems.length}</h4>
                  </div>
                  <div className='col-md-2'>
                    <h4>${total.toFixed(2)}</h4>
                  </div>
                </div>
              ) : <div></div>
            )
          }
        </CartContext.Consumer>
      </div>
    )

  }
}

export default Cart;