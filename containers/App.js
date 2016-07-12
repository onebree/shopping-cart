import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { render} from 'react-dom' 
import { Provider } from 'react-redux' 
import store from '../store'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>World Class Shopping</h1>
        <div className="row">
          <ProductsContainer />
          <CartContainer />
        </div>
      </div>
    )
  }
}


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react")
)
