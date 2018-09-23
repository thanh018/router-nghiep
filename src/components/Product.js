import React, { Component } from 'react';
import { NavLink, Route} from 'react-router-dom';
import Description from './Description';

class Product extends Component {
  
  render() {
    var products = [
      {
        id: 1,
        name: 'Note 9',
        price: '1000',
        group: 'Samsung'
      },
      {
        id: 2,
        name: 'Iphone Xs Max',
        price: '1200',
        group: 'Apple'
      },
      {
        id: 3,
        name: 'Mi 8',
        price: '600',
        group: 'Xiaomi'
      },
      {
        id: 4,
        name: 'S9',
        price: '900',
        group: 'Samsung'
      },
      {
        id: 5,
        name: 'Iphone 6',
        price: '300',
        group: 'Apple'
      },
    ];

    var { location } = this.props;
    console.log(location);
    return (
      <div>
        <h1 className="main-title">PRODUCT</h1>
        <ul className='product-list'>
          {this.showProduct(products)}
        </ul>
        <div>
          <Route path="/product/:group/:id/" component={Description} />
        </div>
      </div>
    );
  }


  
  showProduct = (products) => {
    var result = null;
    var {match} = this.props;

    if (products.length > 1) {
      result = products.map((product, index) => {
        return (
          <li className='product-item' key={index}>
            <NavLink to = {`${match.url}/${product.group}/${product.id}`}>
              <span>{product.id}/</span>
              <span>{product.name}</span>
              <span>{product.price}$</span>
            </NavLink>
          </li>
        )
      });
    }
    return result;
  }
}

export default Product;
