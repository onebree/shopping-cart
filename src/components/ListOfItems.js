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
                    <div className="col-md-4">
                      <Item key={key}
                            index={key}
                            details={this.props.items[key]}
                            addToOrder={this.props.addToOrder} />
                    </div>)
          }
        </div>
      </div>
    )
  }
}

export default ListOfItems;
