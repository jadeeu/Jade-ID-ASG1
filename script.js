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

// --- 1. INITIALIZATION ---

// Retrieve the cart data from local storage, or start with an empty array if none exists.
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Get the HTML element that displays the cart item count.
// This is done once when the script loads for efficiency.
const cartCountElement = document.getElementById('cart-count');


// --- 2. CORE UTILITY FUNCTIONS ---

/**
 * Saves the current state of the cart array to Local Storage.
 */
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

/**
 * Calculates the total number of items (quantity) in the cart and updates the display.
 */
function updateCartCount() {
    let totalItems = 0;
    
    // Sum the quantity property of every item object in the cart array.
    cart.forEach(item => {
        totalItems += item.quantity;
    });

    // Update the HTML element's text content.
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// --- 3. MAIN ADD TO CART LOGIC ---

/**
 * Adds a product to the cart array.
 * @param {number} id - The unique ID of the product (e.g., 1, 2, 3).
 * @param {string} name - The name of the product.
 */
function addToCart(id, name) {
    // Find the button element that triggered this function
    const triggerButton = document.querySelector(`button[onclick*="addToCart(${id}, '${name}')"]`);

    if (!triggerButton) {
        console.error('Add to Cart button not found.');
        return;
    }

    // Traverse up to the product item container and find the price element
    const productItem = triggerButton.closest('.product-item');
    const priceElement = productItem ? productItem.querySelector('.price') : null;
    
    if (!priceElement) {
        console.error('Price element not found for product ID:', id);
        return;
    }
    
    // Retrieve the price from the custom data-price attribute
    const price = parseFloat(priceElement.getAttribute('data-price'));


    // --- Cart Update Logic ---
    
    // Check if the item already exists in the cart array
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // If the item is already in the cart, increment its quantity
        existingItem.quantity += 1;
    } else {
        // If it's a new item, add the entire object to the cart array
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1 // Start with a quantity of 1
        });
    }

    // Save the updated cart to storage and refresh the count display
    saveCart();
    updateCartCount();

    // Optional: Provide visual feedback to the user
    // alert(`${name} added to cart! Total items: ${cartCountElement.textContent}`);
}


// --- 4. EXECUTION ---

// Ensure the cart count is loaded and displayed immediately when the page finishes loading.
document.addEventListener('DOMContentLoaded', updateCartCount);