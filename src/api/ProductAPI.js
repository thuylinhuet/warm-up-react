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
	}
}