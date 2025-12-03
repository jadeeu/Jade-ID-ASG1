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
