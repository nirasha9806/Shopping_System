import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../navbar-component/Navbar';
import TableRow from './TableRow';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }
  componentDidMount() {
    let uid = window.sessionStorage.getItem('me');
    axios
      .get('http://localhost:5000/api/sellers/' + uid, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.product.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div>
          <h3 align='center'> Your Products</h3>
          <div
            className='shadow p-5'
            style={{ width: '75rem', marginLeft: '100px' }}
          >
            <table id='my-table' class='table table-hover'>
              <thead className='table-active'>
                <tr>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Category</th>
                  <th>Discription</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{this.tabRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
