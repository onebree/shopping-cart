import React from "react";
import Cart from "./Cart";
import ListOfItems from "./ListOfItems";
import sampleItems from "../sample-items";
import base from "../base";

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateCart = this.updateCart.bind(this);

    // getInitialState
    this.state = {
      items: {},
      cart: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState("items", {
      context: this,
      state: "items"
    });

    const localStorageRef = localStorage.getItem("shopping-cart/cart");

    if(localStorageRef) {
      this.setState({
        cart: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("shopping-cart/cart", JSON.stringify(nextState.cart));
  }

  loadSamples() {
    this.setState ({
      items: sampleItems
    });
  }

  addToCart(key) {
    // Take a copy of our state
    const cart = {...this.state.cart};

    // Update or add a new number of items ordered
    cart[key] = cart[key] + 1 || 1;

    // Update our state
    this.setState({ cart });
  }

  updateCart(key, updatedQuantity) {
    const cart = {...this.state.cart};
    cart[key] = updatedQuantity;
    this.setState({ cart });
  }

  render() {
    return (
      <div className="container">
        <h1>World Class Shopping</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <ListOfItems items={this.state.items} addToCart={this.addToCart} />
            <button className="btn btn-default" onClick={this.loadSamples}>Load sample items</button>
          </div>
          <div className="col-md-4">
            <Cart items={this.state.items} cart={this.state.cart} updateCart={this.updateCart} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
