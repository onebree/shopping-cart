import React from "react";
import ReactDOM from "react-dom";
import Redux from "redux";
import { createStore, combineReducers } from 'redux';

var ITEMS = [
  { id: 1, name: "Nexus 6P", price: "499.99", quantity: 0 },
  { id: 2, name: "OnePlus 3", price: "399.99", quantity: 0 },
  { id: 3, name: "Kindle Paperwhite", price: "119.99", quantity: 0 },
  { id: 4, name: "Reversible Down Comforter", price: "45.99", quantity: 0 },
  { id: 5, name: "Women's Bag Gloves", price: "39.55", quantity: 0 },
  { id: 6, name: "Casio Digital Watch", price: "14.99", quantity: 0 }
];

const item = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.id !== action.id) {
        return state;
      }

      return {
        id: state.id,
        name: state.name,
        price: state.price,
        quantity: state.quantity + 1
      };
    default:
      return state;
  }
};

const items = (state = ITEMS, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state.map(i => item(i, action));
    default:
      return state;
  }
};

const Item = ({ id, name, price, quantity }) => (
  <div className="col-md-4">
    <div className="thumbnail">
      <img src="http://placehold.it/400x300" className="img-responsive" />
      <div className="caption">
        <big>{name}</big>
        <p>${price}</p>
        <p>
          <button
            className="btn btn-primary"
            onClick={() => {
              store.dispatch({
                type: "ADD_ITEM",
                id: id
              });
            }}
          >
            Add to cart
          </button>
        </p>
      </div>
    </div>
  </div>
);

const ItemsList = ({ items }) => (
  <div className="col-md-8">
    <h2>Items For Sale</h2>
    <div className="row">
      {items.map(item =>
        <Item key={item.id} {...item} />
      )}
    </div>
  </div>
);

const CartItem = ({ id, name, price, quantity }) => (
  <tr>
    <td>{name} (${price}) X {quantity}</td>
    <td>${price * quantity}</td>
  </tr>
)

const Cart = ({ items }) => (
  <div className="col-md-4">
    <h2>Shopping Cart</h2>
    <table className="table">
      <thead>
        <tr className="success">
          <th>Items: {items.reduce((sum, item) => sum + item.quantity, 0)}</th>
          <th>Subtotal: ${items.map(i => i.price * i.quantity).reduce((sum, p) => sum + p, 0 )}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => <CartItem key={item.id} {...item} />)}
      </tbody>
    </table>
  </div>
);

const ShoppingCartApp = () => (
  <div>
    <h1>World Class Shopping</h1>
    <div className="row">
      <ItemsList items={ITEMS} />
      <Cart items={store.getState().items.filter(i => i.quantity > 0)} />
    </div>
  </div>
);

const cartApp = combineReducers({ items });
const store = createStore(cartApp);

const render = () => {
  ReactDOM.render(
    <ShoppingCartApp />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
