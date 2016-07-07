import React from 'react'
import ReactDOM from "react-dom"
import { render } from 'react-dom'

// ITEMS FOR SALE

var Item = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <img src="http://placehold.it/400x300" className="img-responsive" />
          <div className="caption">
            <big>{this.props.item.name}</big>
            <p>{this.props.item.price}</p>
            <p><button className="btn btn-primary">Add to cart</button></p>
          </div>
        </div>
      </div>
    );
  }
});

var ItemGrid = React.createClass({
  render: function() {
    var itemGrid = [];
    this.props.items.forEach(function(item) {
      itemGrid.push(<Item item={item} key={item.id} />);
    });
    return (
      <div className="itemGrid">
        <h2>Items For Sale</h2>
        <div className="row">
          {itemGrid}
        </div>
      </div>
    );
  }
});

// SHOPPING CART

var ItemRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
      </tr>
    );
  }
});

var ItemTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.items.forEach(function(item) {
      rows.push(<ItemRow item={item} key={item.id} />);
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var TotalRow = React.createClass({
  render: function() {
    return (
      <table className="table">
        <tr className="success">
          <th>Items: 0</th>
          <th>Subtotal: $0.00</th>
        </tr>
      </table>
    );
  }
});

var ShoppingCart = React.createClass({
  render: function() {
    return (
      <div className="shoppingCart">
        <h2>Shopping Cart</h2>
        <TotalRow />
        <ItemTable items={this.props.items} />
      </div>
    );
  }
});

var ITEMS = [
  { id: 1, name: "Nexus 6P", price: "$499.99" },
  { id: 2, name: "OnePlus 3", price: "$399.99" },
  { id: 3, name: "Kindle Paperwhite", price: "$119.99" },
  { id: 4, name: "Reversible Down Comforter", price: "$45.99" },
  { id: 5, name: "Women's Bag Gloves", price: "$39.55" },
  { id: 6, name: "Casio Digital Watch", price: "$14.99" }
]

ReactDOM.render(
  <ItemGrid items={ITEMS} />,
  document.getElementById("itemGrid")
);

ReactDOM.render(
  <ShoppingCart items={ITEMS} />,
  document.getElementById("shoppingCart")
);
