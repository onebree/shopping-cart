import React, { Component, PropTypes } from 'react'
import { getSubtotal, getCartProducts } from '../reducers'
import Product from "./Product"

export default class Cart extends Component {
  render() {
    const { products, subtotal } = this.props

    const hasProducts = products.length > 0

    const nodes = products.map(product =>
      <tr>
        <td>
          <Product name={product.name} price={product.price} key={product.id} />
        </td>
      </tr>
      )

    return (
      <div className="col-md-4">
        <h2>Shopping Cart</h2>
        <table className="table">
          <thead>
            <tr className="success">
              <th>Items: {products.length}</th>
              <th>Subtotal: ${subtotal}</th>
            </tr>
          </thead>
          <tbody>{nodes}</tbody>
        </table>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  subtotal: PropTypes.number
}
