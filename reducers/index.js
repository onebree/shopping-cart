import { combineReducers } from 'redux'

const initialState = {
  products: []
}

function products(state = initialState.products, action) {
  switch(action.type) {
    case "addToCart":
      return state.push(action.product)
    default:
      return state
  }
}

export function getSubtotal(state) {
  return state.products.reduce( (subtotal, product) =>
    subtotal + product.price, 0
  ).toFixed(2)
}

export function getCartProducts(state) {
  return state.products
}

export default combineReducers({
  products
})
