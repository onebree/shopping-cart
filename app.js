import React from "react";
import ReactDOM from "react-dom";
import Redux from "redux";
import { createStore, combineReducers } from "redux";

var ITEMS = [
  { id: 1, name: "Nexus 6P", price: "499.99", quantity: 0, cart_id: null },
  { id: 2, name: "OnePlus 3", price: "399.99", quantity: 0, cart_id: null },
  { id: 3, name: "Kindle Paperwhite", price: "119.99", quantity: 0, cart_id: null },
  { id: 4, name: "Reversible Down Comforter", price: "45.99", quantity: 0, cart_id: null },
  { id: 5, name: "Women's Bag Gloves", price: "39.55", quantity: 0, cart_id: null },
  { id: 6, name: "Casio Digital Watch", price: "14.99", quantity: 0, cart_id: null }
];

const item = (state, action) => {
  if (state.id != action.id) {
    return state;
  }

  switch (action.type) {
    case "ADD_ITEM":
      return {
        id: state.id,
        name: state.name,
        price: state.price,
        cart_id: action.cart_id,
        quantity: 1
      };

    case "REMOVE_ITEM":
      return {
        id: state.id,
        name: state.name,
        price: state.price,
        cart_id: null,
        quantity: 0
      }

    case "CHANGE_QUANTITY":
      return {
        id: state.id,
        name: state.name,
        price: state.price,
        cart_id: state.cart_id,
        quantity: action.quantity
      };
    default:
      return state;
  }
};

const items = (state = ITEMS, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      var cart_items = state.filter(i => i.cart_id != null)
                            .sort((a,b) => a.cart_id - b.cart_id);
      if (cart_items.length == 0) {
        action.cart_id = 1;
      } else {
        action.cart_id = cart_items[cart_items.length - 1].cart_id + 1;
      }
      return state.map(i => item(i, action));

    case "REMOVE_ITEM":
      return state.map(i => item(i, action));

    case "CHANGE_QUANTITY":
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
            id={id + "_add_to_cart"}
            onClick={() => {
              $("#" + id + "_add_to_cart").attr("disabled", true);
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

const CartItem = ({ id, name, price, quantity, cart_id }) => (
  <tr>
    <td>
      <p>{name} (${price}) X {quantity}</p>
      <p>
        <select
          className="form-control"
          onChange={(e) => {
            store.dispatch({
              type: "CHANGE_QUANTITY",
              id: id,
              quantity: +e.target.value
            });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </p>
    </td>
    <td className="text-right">
      <p>${(price * quantity).toFixed(2)}</p>
      <p>
        <a
          onClick={() => {
            $("#" + id + "_add_to_cart").attr("disabled", false);
            store.dispatch({
              type: "REMOVE_ITEM",
              id: id
            });
          }}
        >
          Remove
        </a>
      </p>
    </td>
  </tr>
);

const Cart = ({ items }) => (
  <div className="col-md-4">
    <h2>Shopping Cart</h2>
    <table className="table">
      <thead>
        <tr className="success">
          <th>Items: {items.reduce((sum, item) => sum + item.quantity, 0)}</th>
          <th className="text-right">
            Subtotal: ${
              items.map(i => i.price * i.quantity)
                .reduce((sum, p) => sum + p, 0)
                .toFixed(2)
            }
          </th>
        </tr>
      </thead>
      <tbody>
        {
          items.filter(i => i.cart_id != null)
            .sort((a,b) => a.cart_id - b.cart_id)
            .map(item => <CartItem key={item.id} {...item} />)
        }
      </tbody>
    </table>
  </div>
);

const ShoppingCartApp = () => (
  <div>
    <h1>World Class Shopping</h1>
    <div className="row">
      <ItemsList items={ITEMS} />
      <Cart items={store.getState().items} />
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
