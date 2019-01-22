import React from 'react';

import ProductAPI from '../api/ProductAPI';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      // _id: "",
      name: "",
      description: "",
      price: "",
      imgUrl: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getProduct().then(product => {
      console.log(product);
    })
  }

  getProduct = async () => {
    const product = await ProductAPI.getProduct(this.props.match.params.id);
    console.log(product);
    this.setState({
      name: product.name,
      description: product.description,
      price: product.price,
      imgUrl: product.imgUrl
    })
    // console.log(this.state.product);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.id;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  updateProduct = async () => {
    console.log(this.state.product);
    let product = await ProductAPI.updateProduct(
      this.props.match.params.id,
      this.state.name,
      this.state.description,
      this.state.price,
      this.state.imgUrl);
    return product;
  }

  handleSubmit(e) {
    console.log(this.state);
    this.updateProduct().then(product => {
      this.props.history.push({ pathname: `/products/${product._id}` })
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className='container' style={{ paddingTop: '70px' }}>
        <h3 className='text-center'>Update product</h3>
        <h5 className='text-center'>{this.state.name}</h5>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label for='name'>Product Name:</label>
            <input type='text' className='form-control' id='name'
              onChange={this.handleInputChange}
              value={this.state.name}
              required />
          </div>
          <div className='form-group'>
            <label for='description'>Description:</label>
            <input type='text' className='form-control' id='description'
              onChange={this.handleInputChange}
              value={this.state.description}
              required ></input>
          </div>
          <div className='form-group'>
            <label for='imgUrl'>Image URL:</label>
            <input type='text' className='form-control' id='imgUrl'
              onChange={this.handleInputChange}
              value={this.state.imgUrl}
              required />
          </div>
          <div className='form-group'>
            <label for='price'>Price:</label>
            <input type='text' className='form-control' id='price'
              placeholder='eg: $100, $150.34'
              onChange={this.handleInputChange}
              value={this.state.price}
              required ></input>
          </div>
          <button type='submit' className='btn btn-primary'>Update</button>
        </form>
      </div>
    )
  }
}

export default UpdateForm;