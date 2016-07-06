import React from 'react'
import ReactDOM from "react-dom"
import { render } from 'react-dom'

var ItemRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>Nexus 6P</td>
        <td>$499.99</td>
      </tr>
    );
  }
});

var ItemList = React.createClass({
  render: function() {
    return (
      <ItemRow />
    );
  }
});

var TotalRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>Items: 0</td>
        <td>Subtotal: $0.00</td>
      </tr>
    );
  }
});

var ShoppingCartTable = React.createClass({
  render: function() {
    return (
      <div className="shoppingCartTable">
        <h3>Shopping Cart</h3>
        <table className="table">
          <TotalRow />
          <ItemList />
        </table>
      </div>
    );
  }
});

ReactDOM.render(
  <ShoppingCartTable />,
  document.getElementById("react")
);
