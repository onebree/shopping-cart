import React from "react";
import Item from "./Item";

class ListOfItems extends React.Component {
  render() {
    return (
      <div className="list-of-items">
        <h2>Items For Sale</h2>
        <div className="row">
          <div className="col-md-4">
            <Item key="item1" index="item1" name="Nexus 6P" price={499.99} addToCart={this.props.addToCart} />
          </div>
          <div className="col-md-4">
            <Item key="item2" index="item2" name="OnePlus 3" price={399.99} addToCart={this.props.addToCart} />
          </div>
          <div className="col-md-4">
            <Item key="item3" index="item3" name="Google Pixel" price={649} addToCart={this.props.addToCart} />
          </div>
          <div className="col-md-4">
            <Item key="item4" index="item4" name="Google Pixel XL" price={769} addToCart={this.props.addToCart} />
          </div>
        </div>
      </div>
    )
  }
}

export default ListOfItems;
