// Sample product data
const products = [
  { id: 1, name: "T-Shirt 1", price: 20, image: "images/tshirt1.jpg" },
  { id: 2, name: "T-Shirt 2", price: 25, image: "images/tshirt2.jpg" },
];

let cart = [];

// Load products into the page
function loadProducts() {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  document.getElementById("cart-count").textContent = cart.length;
}

// Toggle cart visibility
function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display =
    cartModal.style.display === "block" ? "none" : "block";
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").textContent = cart.length;
  updateCartDisplay();
}

// Checkout function
function checkout() {
  alert("Proceeding to checkout");
  cart = [];
  document.getElementById("cart-count").textContent = 0;
  toggleCart();
}

// Load products when page loads
window.onload = loadProducts;
//shreya bist
//hhsdahdka
