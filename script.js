// ----------------------------------------------------
// 1. PAGE LOAD LOG
// ----------------------------------------------------
console.log("Main page loaded successfully!");


// ----------------------------------------------------
// 2. SHOP LINK CLICK LOG
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const shopLink = document.querySelector('a[href="shop.html"]');

  if (shopLink) {
    shopLink.addEventListener("click", () => {
      console.log("Navigating to SHOP page...");
    });
  }
});


// ----------------------------------------------------
// 3. EXECUTION ON PAGE LOAD
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", updateCartCount);


// ----------------------------------------------------
// 4. ALERT FUNCTIONS
// ----------------------------------------------------
function showSoldOutAlert() {
  alert("All tickets sold out.");
}


// ----------------------------------------------------
// 5. CART FUNCTIONALITY
// ----------------------------------------------------
function addToCart() {
  const cartQuantityElement = document.getElementById("cart-quantity");
  const currentQuantity = parseInt(cartQuantityElement.textContent);

  const newQuantity = currentQuantity + 1;
  cartQuantityElement.textContent = newQuantity;

  alert("Item added to cart! Total items: " + newQuantity);
}


// ----------------------------------------------------
// 6. Additional functions for future features
// ----------------------------------------------------
// (Add more functions here)
