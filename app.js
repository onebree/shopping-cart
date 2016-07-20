import React from "react";
import ReactDOM from "react-dom";

var ITEMS = [
  { id: 1, name: "Nexus 6P", price: "499.99" },
  { id: 2, name: "OnePlus 3", price: "399.99" },
  { id: 3, name: "Kindle Paperwhite", price: "119.99" },
  { id: 4, name: "Reversible Down Comforter", price: "45.99" },
  { id: 5, name: "Women's Bag Gloves", price: "39.55" },
  { id: 6, name: "Casio Digital Watch", price: "14.99" }
]

const Item = ({ id, name, price, quantity, onClick }) => (
  <div className="col-md-4">
    <div className="thumbnail">
      <img src="http://placehold.it/400x300" className="img-responsive" />
      <div className="caption">
        <big>{name}</big>
        <p>${price}</p>
        <p><button className="btn btn-primary" onClick={onClick}>Add to cart</button></p>
      </div>
    </div>
  </div>
);

const ItemsList = ({ items }) => (
  <div className="col-md-8">
    <h2>Items For Sale</h2>
    <div className="row">
      {items.map(item =>
        <Item key={item.id} {...item} onClick={() => console.log(item.name)} />
      )}
    </div>
  </div>
);

const ShoppingCartApp = () => (
  <div>
    <h1>World Class Shopping</h1>
    <div className="row">
      <ItemsList items={ITEMS} />
    </div>
  </div>
);

ReactDOM.render(
  <ShoppingCartApp />,
  document.getElementById("root")
);
