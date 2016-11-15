import React from "react";

class Cart extends React.Component {
  render() {
    const cartIds = Object.keys(this.props.cart);

    const count = cartIds.reduce((prevCount, key) => {
      return prevCount + this.props.cart[key];
    }, 0);

    const total = cartIds.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const quantity = this.props.cart[key];

      return prevTotal + (quantity * item.price || 0);
    }, 0);

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <table className="table">
          <thead>
            <tr className="success">
              <th>Items: {count}</th>
              <th className="cart-total">Subtotal: ${total}</th>
            </tr>
          </thead>
          <tbody className="cart-items">
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart;
