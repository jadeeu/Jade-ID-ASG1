// ----------------------------------------------------
// 1. PAGE LOAD LOG
// ----------------------------------------------------
console.log("Chase Atlantic Fan Site: Script loaded successfully!");
localStorage.removeItem('cartQuantity');

// ----------------------------------------------------
// 2. CORE CART DATA HANDLING (Persistence)
// ----------------------------------------------------

/**
 * Loads the cart quantity from localStorage.
 * Returns 0 if not set or invalid.
 */
function loadCartQuantity() {
    const storedQuantity = localStorage.getItem('cartQuantity');

    // Convert to integer and validate
    const quantity = parseInt(storedQuantity);

    return Number.isInteger(quantity) && quantity >= 0 ? quantity : 0;
}

/**
 * Updates the cart number displayed in the navbar.
 */
function updateCartDisplay() {
    const quantity = loadCartQuantity();
    const cartQuantityElement = document.getElementById('cart-quantity');

    if (cartQuantityElement) {
        cartQuantityElement.textContent = quantity;
    }
}


// ----------------------------------------------------
// 3. ADD TO CART FUNCTION (Called from shop.html)
// ----------------------------------------------------
function addToCart(productName, productPrice) {
    // Load previous quantity
    let currentQuantity = loadCartQuantity();

    // Add one new item
    currentQuantity += 1;

    // Save updated quantity
    localStorage.setItem('cartQuantity', currentQuantity);

    // Update navbar badge immediately
    updateCartDisplay();

    // Feedback
    console.log(`Added: ${productName} ($${productPrice}). New total: ${currentQuantity}`);
    alert(`${productName} added to cart! Total items: ${currentQuantity}`);
}


// ----------------------------------------------------
// 4. ALERT & LOGGING FUNCTIONS
// ----------------------------------------------------
function showSoldOutAlert() {
    alert("All tickets sold out.");
}

// Optional logging for development
document.addEventListener("DOMContentLoaded", () => {
    const shopLink = document.querySelector('a[href="shop.html"]');
    if (shopLink) {
        shopLink.addEventListener("click", () => {
            console.log("Navigating to SHOP page...");
        });
    }
});


// ----------------------------------------------------
// 5. EXECUTION ON EVERY PAGE LOAD
// ----------------------------------------------------

// Ensures correct cart number shows every time you reload or visit any page
document.addEventListener("DOMContentLoaded", updateCartDisplay);
