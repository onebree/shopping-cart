import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props

    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <img src="http://placehold.it/400x300" className="img-responsive" />
          <div className="caption">
            <Product name={product.name} price={product.price} />
            <p>
              <button className="btn btn-primary" onClick={this.props.onAddToCart} >
                Add to cart
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
}
