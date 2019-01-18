import React from 'react';

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cartItems: [],
      total: 0,
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product),
      total: this.state.total + parseFloat(product.price.substring(1))
    });

    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    localStorage.setItem('total', this.state.total.toString());
    console.log("aBC");
  }

  removeFromCart(product) {
    const newItems = this.state.cartItems.filter(item => {
      return item !== product;
    });

    this.setState({
      cartItems: [...newItems],
      total: this.state.total - parseFloat(product.price.substring(1))
    })

    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    localStorage.setItem('total', this.state.total.toString());
  }

  // componentDidMount() {
  //   this.handleDataFromLocalStorage();
  // }

  // handleDataFromLocalStorage(){
  //   let cartItems = JSON.parse(localStorage.getItem('cartItems'));
  //   let total = parseFloat(localStorage.getItem('total'));

  //   this.setState({
  //     cartItems: cartItems,
  //     total: total
  //   })
  // }

  render() {
    return (
      <CartContext.Provider value={{
        cartItems: this.state.cartItems,
        total: this.state.total,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
      }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}