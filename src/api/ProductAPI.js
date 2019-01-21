import Axios from 'axios';

export default {
  getProductList: () => {
    return Axios({
      method: 'GET',
      url: 'http://localhost:5555/api/products',
      data: null
    }).then(res => {
      console.log("axois success");
      return res.data.products;
    }).catch(err => {
      if (err) {
        console.log(err);
        return err
      }
    })
  },

  getProduct: (id) => {
    return Axios({
      method: 'GET',
      url: 'http://localhost:5555/api/products/' + id,
      data: null
    }).then(res => {
      console.log('found product');
      console.log(res.data.product);
      return res.data.product;
    }).catch(err => {
      if (err) {
        console.log(err);
        return err;
      }
    })
  },

  createProduct: (name, description, price, url) => {
    let product = {
      name: name,
      description: description,
      price: price,
      imgUrl: url
    }
    return Axios({
      method: 'POST',
      url: 'http://localhost:5555/api/products/create',
      data: product
    }).then(res => {
      console.log(res.data.product);
      return res.data.product;
    }).catch(err => {
      if (err) {
        console.log(err);
        return err;
      }
    })
  }
}