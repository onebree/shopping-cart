import React from 'react'
import ReactDOM from "react-dom"
import { render } from 'react-dom'

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
        <h3>Shopping Cart</h3>
        <TotalRow />
        <ItemTable items={this.props.items} />
      </div>
    );
  }
});

var ITEMS = [
  { id: 1, name: "Nexus 6P", price: "$499.99" },
  { id: 2, name: "OnePlus 3", price: "$399.99" },
  { id: 3, name: "Kindle Paperwhite", price: "$119.99" }
]

ReactDOM.render(
  <ShoppingCart items={ITEMS} />,
  document.getElementById("react")
);
