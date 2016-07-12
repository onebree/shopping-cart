import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

class ProductsContainer extends Component {
  render() {
    const { products } = this.props
    return (
      <ProductsList>
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={() => this.props.addToCart(product)} />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}


const PRODUCTS = [
  { id: 1, name: "Nexus 6P", price: 499.99 },
  { id: 2, name: "OnePlus 3", price: 399.99 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99 },
  { id: 4, name: "Reversible Down Comforter", price: 45.99 },
  { id: 5, name: "Women's Bag Gloves", price: 39.55 },
  { id: 6, name: "Casio Digital Watch", price: 14.99 }
]

function mapStateToProps(state) {
  return {
    products: PRODUCTS
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
