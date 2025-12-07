// ----------------------------------------------------
// 1. PAGE LOAD LOG
// ----------------------------------------------------
console.log("Chase Atlantic Fan Site: Script loaded successfully!");


// ----------------------------------------------------
// 2. CORE CART DATA HANDLING (Persistence)
// ----------------------------------------------------

/**
 * Loads the cart quantity from the browser's localStorage.
 * Defaults to 0 if no quantity is found.
 * @returns {number} The current cart quantity.
 */
function loadCartQuantity() {
    const storedQuantity = localStorage.getItem('cartQuantity');
    // Ensure the return is an integer (number), defaulting to 0
    return parseInt(storedQuantity) || 0;
}

/**
 * Updates the visual cart badge element on the navigation bar.
 */
function updateCartDisplay() {
    const quantity = loadCartQuantity();
    const cartQuantityElement = document.getElementById('cart-quantity');
    
    // Check if the element exists (it exists on all pages)
    if (cartQuantityElement) {
        cartQuantityElement.textContent = quantity;
    }
}


// ----------------------------------------------------
// 3. ADD TO CART FUNCTION (Called from shop.html)
// ----------------------------------------------------
function addToCart(productName, productPrice) {
    // 1. Get the current quantity from localStorage
    let currentQuantity = loadCartQuantity();
    
    // 2. Increment the total quantity
    currentQuantity += 1;
    
    // 3. Save the new quantity to localStorage
    localStorage.setItem('cartQuantity', currentQuantity);
    
    // 4. Update the display across the whole site
    updateCartDisplay();

    // 5. Confirmation alert
    console.log(`Added: ${productName} ($${productPrice}). New total: ${currentQuantity}`);
    alert(`${productName} added to cart! Total items: ${currentQuantity}`);
}


// ----------------------------------------------------
// 4. ALERT & LOGGING FUNCTIONS
// ----------------------------------------------------
function showSoldOutAlert() {
    alert("All tickets sold out.");
}

// Optional: Keep the shop link log for development purposes
document.addEventListener("DOMContentLoaded", () => {
    const shopLink = document.querySelector('a[href="shop.html"]');
    if (shopLink) {
        shopLink.addEventListener("click", () => {
            console.log("Navigating to SHOP page...");
        });
    }
});


// ----------------------------------------------------
// 5. EXECUTION ON PAGE LOAD
// ----------------------------------------------------

// IMPORTANT: This runs the cart quantity update as soon as ANY page loads,
// ensuring the correct count is shown immediately.
document.addEventListener("DOMContentLoaded", updateCartDisplay);