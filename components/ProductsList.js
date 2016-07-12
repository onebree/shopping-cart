import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="col-md-8">
        <h2>Items For Sale</h2>
        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  children: PropTypes.node
}
