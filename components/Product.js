import React, { Component, PropTypes } from "react"

export default class Product extends Component {
  render() {
    const { name, price } = this.props
    return (
      <div>
        <big>{name}</big>
        <p>${price}</p>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}
