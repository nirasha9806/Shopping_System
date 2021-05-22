import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbar-component/Header';

function Products() {
  const [productList, setProductList] = useState([]);

  //retrieve data
  useEffect(() => {
    axios.get('http://localhost:5000/api/Cart/displayProduct').then((res) => {
      const products = res.data;
      setProductList(products);
    });
  }, []);

  //search part
  const filterContent = (products, searchProduct) => {
    let result2 = [];
    result2 = products.filter((product) =>
      product.category.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setProductList(result2);
    console.log(products);
  };

  const handleSearch = (e) => {
    var searchProduct = e.target.value;

    axios.get('http://localhost:5000/api/Cart/displayProduct').then((res) => {
      const products = res.data;
      setProductList(products);
      filterContent(products, searchProduct);
    });
  };

  return (
    <div>
      <Navbar />
      <br></br>

      <div className='col-md-5 mt-3 mx-auto'>
        <input
          type='search'
          placeholder='Search'
          name='searchDelivery'
          className='form-control ml-2'
          onChange={(e) => handleSearch(e)}
        ></input>
      </div>

      <div>
        <center>
          <div>
            <h1 className='display-4' style={{ alignItems: 'center' }}>
              Items
            </h1>
          </div>

          {productList.map((product) => (
            <div style={{ display: 'inline-block', padding: '20px' }}>
              <div>
                <img
                  src={`http://localhost:5000/${product.image}`}
                  alt=''
                  style={{
                    width: '250px',
                    height: '320px',
                    marginLeft: '35px',
                  }}
                />

                <div>
                  <div>
                    <h2 class='col-sm-9'>{product.itemname}</h2>
                    <h6 className='text-blue'>
                      Rs. <strong>{product.price}.00</strong>
                    </h6>
                    <h6 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      Category: {product.category}
                    </h6>
                    <p className='text-muted lead'>
                      <strong>
                        Discount: {product.discount}
                        <span>%</span>
                      </strong>
                    </p>

                    <button class='btn btn-outline-success'>
                      <Link to={'/detail/' + product._id}>More Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </center>
      </div>
    </div>
  );
}

export default Products;
