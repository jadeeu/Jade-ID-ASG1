// Placeholder JS — ready for features you want later

console.log("Main page loaded successfully!");

// Example: popup message when clicking SHOP
document.addEventListener("DOMContentLoaded", () => {
  const shopLink = document.querySelector('a[href="shop.html"]');

  if (shopLink) {
    shopLink.addEventListener("click", () => {
      console.log("Navigating to SHOP page...");
    });
  }
});

// --- 4. EXECUTION ---

// Ensure the cart count is loaded and displayed immediately when the page finishes loading.
document.addEventListener('DOMContentLoaded', updateCartCount);

function showSoldOutAlert() {
    // This command pops up a modal window with the specified text.
    alert("All tickets sold out.");
}

// --- Cart Functionality ---
function addToCart() {
    // Get the current quantity from the span
    let cartQuantityElement = document.getElementById('cart-quantity');
    let currentQuantity = parseInt(cartQuantityElement.textContent);
    
    // Increase the quantity and update the display
    let newQuantity = currentQuantity + 1;
    cartQuantityElement.textContent = newQuantity;

    // Optional: Provide visual feedback to the user
    alert("Item added to cart! Total items: " + newQuantity);
}

// --- TOUR Alert Functionality ---
function showSoldOutAlert() {
    alert("All tickets sold out");
}

// You can add other functions here later, like initializing the cart on load.