import React from "react";
import Cart from "./Cart";
import ListOfItems from "./ListOfItems";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>World Class Shopping</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <ListOfItems />
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
