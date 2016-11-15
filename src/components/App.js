import React from "react";
import Cart from "./Cart";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>World Class Shopping</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <h2>Items For Sale</h2>
            <ul className="list-of-items">
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </ul>
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
