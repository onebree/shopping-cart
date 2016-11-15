// Set price to fixed num
// Add commas where necessary
export function formatPrice(price) {
  return `$${(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
