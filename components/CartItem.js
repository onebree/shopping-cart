import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class CartItem extends Component {
  render() {
    const { product } = this.props

    return (
      <tr>
        <td colspan="2">
          <Product name={product.name} price={product.price} />
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}
