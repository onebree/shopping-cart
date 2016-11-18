import React from "react";
import { formatPrice } from "../helpers";

class Item extends React.Component {
  render() {
    const { details, index } = this.props;

    return (
      <div className="item">
        <div className="thumbnail">
          <img className="item-image img-responsive" src="http://placehold.it/400x300" alt={details.name} />
          <div className="caption">
            <big className="item-name">{details.name}</big>
            <p className="item-price">{formatPrice(details.price)}</p>
            <button className="btn btn-default" 
                    onClick={() => this.props.addToCart(index)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToCart: React.PropTypes.func.isRequired
};

export default Item;
