import React from "react";
import { formatPrice } from "../helpers";

class Cart extends React.Component {
  constructor() {
    super();

    this.renderCart = this.renderCart.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(e, key) {
    const quantity = parseInt(e.target.value);
    this.props.updateCart(key, quantity);
  }

  renderCart(key) {
    const item = this.props.items[key];
    const quantity = this.props.cart[key];
    const quantityInput = <input type="number" className="form-control input-sm" name="quantity" min="1" value={quantity} onChange={(e) => this.changeQuantity(e, key)} />

    if(!item) {
      return (
        <li className="list-group-item" key={key}>
          Sorry, item is no longer available.
        </li>
      )
    }

    return (
      <li className="list-group-item" key={key}>
        <div className="row">
          <div className="col-md-8">
            {item.name} ({formatPrice(item.price)})
            <br />
            <small>{quantityInput}</small>
          </div>
          <div className="col-md-4 text-right">
            {formatPrice(item.price * quantity)}
          </div>
        </div>
      </li>
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

      if(item) {
        return prevTotal + (quantity * item.price || 0);
      }

      return prevTotal;
    }, 0);

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success total">
            <div className="row">
              <div className="col-md-4">
                <strong>Items: {count}</strong>
              </div>
              <div className="col-md-8 cart-total text-right">
                <strong>Subtotal: {formatPrice(total)}</strong>
              </div>
            </div>
          </li>
          {cartIds.map(this.renderCart)}
        </ul>
      </div>
    )
  }
}

export default Cart;
