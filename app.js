import React from "react";
import ReactDOM from "react-dom";

const ShoppingCartApp = () => (
  <div>
    <h1>World Class Shopping</h1>
    <div className="row">
      <div className="col-md-12"><h2>Hello World!</h2></div>
    </div>
  </div>
);

ReactDOM.render(
  <ShoppingCartApp />,
  document.getElementById("root")
);
