/**
 * @description This function is used to calculate the total price of all the products of a new order
 * @param {Array} products cartProduct: this is an array of objects 
 * @returns {Number} total: this is the total price of all the products in the cart
 */
export const sumTotalPrice = (products) => {
  const total = products.reduce((acc, product) => acc + Math.trunc(product.price) * product.quantity, 0);
  return total;
}