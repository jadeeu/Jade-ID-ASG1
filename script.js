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