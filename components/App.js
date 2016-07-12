import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProductsList from './ProductsList'
import Cart from './Cart'

var PRODUCTS = [
  { id: 1, name: "Nexus 6P", price: 499.99 },
  { id: 2, name: "OnePlus 3", price: 399.99 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99 },
  { id: 4, name: "Reversible Down Comforter", price: 45.99 },
  { id: 5, name: "Women's Bag Gloves", price: 39.55 },
  { id: 6, name: "Casio Digital Watch", price: 14.99 }
]

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>World Class Shopping</h1>
        <div className="row">
          <ProductsList products={PRODUCTS} />
          <Cart products={[]}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("react")
);
