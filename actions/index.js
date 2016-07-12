export function addToCart(product) {
  console.log("add to cart")

  // state.products.reduce is not a function
  return { type: "addToCart", product }

  // Error: Actions must be plain objects. 
  // Use custom middleware for async actions.
  /*
  return (dispatch, getState) => { 
    dispatch({type: "addToCart", product })
  }
  */
}

// removeFromCart
