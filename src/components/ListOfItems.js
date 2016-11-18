import React from "react";
import Item from "./Item";

class ListOfItems extends React.Component {
  render() {
    return (
      <div className="list-of-items">
        <h2>Items For Sale</h2>
        <div className="row">
          {
            Object.keys(this.props.items)
                  .map(key =>
                    <div className="col-md-4" key={key}>
                      <Item key={key}
                            index={key}
                            details={this.props.items[key]}
                            addToCart={this.props.addToCart} />
                    </div>)
          }
        </div>
      </div>
    )
  }
}

ListOfItems.propTypes = {
  items: React.PropTypes.object.isRequired,
  addToCart: React.PropTypes.func.isRequired
};

export default ListOfItems;
