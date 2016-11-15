import React from "react";
import { formatPrice } from "../helpers";

class Cart extends React.Component {
  constructor() {
    super();

    this.renderCart = this.renderCart.bind(this);
  }

  renderCart(key) {
    const item = this.props.items[key];
    const quantity = this.props.cart[key];
    const price = item.price * quantity;

    return (
      <tr key={key}>
        <td>
          <p>{item.name} ({formatPrice(item.price)} X {quantity})</p>
        </td>
        <td className="text-right">
          <p>{formatPrice(price)}</p>
        </td>
      </tr>
    )
  }

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
              <th className="cart-total">Subtotal: {formatPrice(total)}</th>
            </tr>
          </thead>
          <tbody className="cart-items">
            {cartIds.map(this.renderCart)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart;
