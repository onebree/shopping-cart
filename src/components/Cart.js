import React from "react";

class Cart extends React.Component {
  render() {
    const cartIds = Object.keys(this.props.cart);

    const total = cartIds.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const count = this.props.cart[key];

      return prevTotal + (count * item.price || 0);
    }, 0);

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul className="cart-items">
          <li className="cart-total">${total}</li>
        </ul>
      </div>
    )
  }
}

export default Cart;
