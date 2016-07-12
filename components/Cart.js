import React, { Component, PropTypes } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
  render() {
    const { products, subtotal } = this.props

    const hasProducts = products.length > 0

    const nodes = products.map(product =>
      <tr>
        <td>
          <CartItem product={product} key={product.id} />
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
              <th>Subtotal: ${hasProducts ? subtotal : "0.00"}</th>
            </tr>
          </thead>
          <tbody>{nodes}</tbody>
        </table>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  subtotal: PropTypes.number
}
