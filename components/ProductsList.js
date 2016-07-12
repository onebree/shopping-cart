import React, { Component, PropTypes } from 'react'
import ProductItem from '../components/ProductItem'

export default class ProductsList extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="col-md-8">
        <h2>Items For Sale</h2>
        <div className="row">
          { products.map(product =>
            <ProductItem id={product.id} product={product} />
          )}
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired
}
