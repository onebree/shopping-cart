import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="thumbnail">
          <img className="item-image img-responsive" src="http://placehold.it/400x300" alt={this.props.name} />
          <div className="caption">
            <big className="item-name">{this.props.name}</big>
            <p className="item-price">${this.props.price}</p>
            <button className="btn btn-default" 
                    onClick={() => this.props.addToCart(this.props.index)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
