import React from "react";
import Cart from "./Cart";
import Item from "./Item";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>World Class Shopping</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <h2>Items For Sale</h2>
            <div className="list-of-items">
              <div className="row">
                <div className="col-md-4">
                  <Item key="item1" name="Nexus 6P" price={499.99}/>
                </div>
                <div className="col-md-4">
                  <Item key="item2" name="OnePlus 3" price={399.99}/>
                </div>
                <div className="col-md-4">
                  <Item key="item3" name="Google Pixel" price={649}/>
                </div>
                <div className="col-md-4">
                  <Item key="item4" name="Google Pixel XL" price={769}/>
                </div>
              </div>
            </div>
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
