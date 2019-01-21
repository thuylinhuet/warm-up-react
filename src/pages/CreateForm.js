import React from 'react';

import ProductAPI from '../api/ProductAPI';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desciption: "",
      price: "",
      imgUrl: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.id;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  createProduct = async () => {
    let product = await ProductAPI.createProduct(
      this.state.name,
      this.state.desciption,
      this.state.price,
      this.state.imgUrl);
    return product;
  }

  handleSubmit(e) {
    console.log(this.state);
    this.createProduct().then(product => {
      this.props.history.push({ pathname: `/products/${product._id}` })
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className='container' style={{ paddingTop: '70px' }}>
        <h3 className='text-center'>Create product</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label for='name'>Product Name:</label>
            <input type='text' className='form-control' id='name'
              onChange={this.handleInputChange}
              value={this.state.name}
              required />
          </div>
          <div className='form-group'>
            <label for='desciption'>Desciption:</label>
            <input type='text' className='form-control' id='desciption'
              onChange={this.handleInputChange}
              value={this.state.desciption}
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
          <button type='submit' className='btn btn-primary'>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateForm;