import React from "react";
import Cart from "./Cart";
import ListOfItems from "./ListOfItems";

class App extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);

    // getInitialState
    this.state = {
      items: {},
      cart: {}
    };
  }

  addToCart(key) {
    // Take a copy of our state
    const cart = {...this.state.cart};

    // Update or add a new number of items ordered
    cart[key] = cart[key] + 1 || 1;

    // Update our state
    this.setState({ cart });
  }

  render() {
    return (
      <div className="container">
        <h1>World Class Shopping</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <ListOfItems addToCart={this.addToCart} />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
