const products = [
  { id: 1, name: "T-Shirt 1", price: 20, image: "images/tshirt1.jpg" },
  { id: 2, name: "T-Shirt 2", price: 25, image: "images/tshirt2.jpg" },
];

let cart = [];

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
// //

function loadProducts() {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";
  products.forEach((product, index) => {
    productContainer.innerHTML += `
          <div class="product-card" style="animation-delay: ${index * 0.2}s;">
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      `;
  });
}

window.onload = function () {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 2000);
};

// //

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display =
    cartModal.style.display === "block" ? "none" : "block";
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").textContent = cart.length;
  updateCartDisplay();
}

function checkout() {
  alert("Proceeding to checkout");
  cart = [];
  document.getElementById("cart-count").textContent = 0;
  toggleCart();
}

window.onload = loadProducts;

// Hi iam shreya
//shreya bist
//hhsdahdka
