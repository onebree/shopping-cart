import React from "react";

class Item extends React.Component {
  render() {
    const { details, index } = this.props;

    return (
      <div className="item">
        <div className="thumbnail">
          <img className="item-image img-responsive" src="http://placehold.it/400x300" alt={details.name} />
          <div className="caption">
            <big className="item-name">{details.name}</big>
            <p className="item-price">${details.price}</p>
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

export default Item;
