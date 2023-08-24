const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Add 'Meat' to the beginning of the shopping cart if not already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// Add 'Sugar' to the end of the shopping cart if not already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// Remove 'Honey' from the shopping cart
const indexToRemove = shoppingCart.indexOf("Honey");
if (indexToRemove !== -1) {
  shoppingCart.splice(indexToRemove, 1);
}

// Modify 'Tea' to 'Green Tea' in the shopping cart
const indexToModify = shoppingCart.indexOf("Tea");
if (indexToModify !== -1) {
  shoppingCart[indexToModify] = "Green Tea";
}

console.log(shoppingCart);
