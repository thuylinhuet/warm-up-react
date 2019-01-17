import React from 'react';

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  removeFromCart(product) {
    console.log(product);
    const newItems = this.state.cartItems.filter(item => {
      return item !== product;
    });

    this.setState({
      cartItems: [...newItems]
    })
  }

  render() {
    return (
      <CartContext.Provider value={{
        cartItems: this.state.cartItems,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart
      }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}