import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getSubtotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

class CartContainer extends Component {
  render() {
    const { products, subtotal } = this.props

    return (
      <Cart
        products={products}
        subtotal={subtotal} />
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  subtotal: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getSubtotal(state)
  }
}

export default connect(mapStateToProps)(CartContainer)
