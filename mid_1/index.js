const productContainer = document.getElementById("product-container");
const shoppingCart = document.getElementById("cart");

const items = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];


let cartItems = [];

function displayProducts() {
  productContainer.innerHTML = "<h2>Shopping Cart</h2>"; 

  items.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = item.name;
    image.classList.add("product-image");

    imageContainer.appendChild(image);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = "$" + item.price.toFixed(2);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.classList.add("add-to-cart-btn");

    button.addEventListener("click", () => addItemToCart(item));

    infoDiv.appendChild(name);
    infoDiv.appendChild(price);
    infoDiv.appendChild(button);

    productDiv.appendChild(imageContainer);
    productDiv.appendChild(infoDiv);

    productContainer.appendChild(productDiv);
  });
}

function addItemToCart(item) {
  const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.item === item);
  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++;
  } else {
    cartItems.push({ item, quantity: 1 });
  }
  displayCart();
}

function removeItemFromCart(index) {
  cartItems.splice(index, 1);
  displayCart();
}

function updateQuantityInCart(index, newQuantity) {
  cartItems[index].quantity = newQuantity;
  displayCart();
}

function displayCart() {
  shoppingCart.innerHTML = ""; 

  cartItems.forEach((cartItem, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    const itemName = document.createElement("span");
    itemName.textContent = cartItem.item.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = " $  " + (cartItem.item.price * cartItem.quantity).toFixed(2);

    const quantityControl = document.createElement("div");
    quantityControl.classList.add("quantity-control");

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => {
      if (cartItem.quantity > 1) {
        updateQuantityInCart(index, cartItem.quantity - 1);
      }
    });

    const quantityDisplay = document.createElement("span");
    quantityDisplay.textContent = cartItem.quantity;

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => updateQuantityInCart(index, cartItem.quantity + 1));
    quantityControl.appendChild(decreaseButton);
    quantityControl.appendChild(quantityDisplay);
    quantityControl.appendChild(increaseButton);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeItemFromCart(index));
    cartItemDiv.appendChild(itemName);
    cartItemDiv.appendChild(itemPrice);
    cartItemDiv.appendChild(quantityControl);
    cartItemDiv.appendChild(removeButton);

    shoppingCart.appendChild(cartItemDiv);
  });

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.item.price * cartItem.quantity;
  }, 0);
  const totalPriceDisplay = document.createElement("div");
  totalPriceDisplay.textContent = "Total Price: $   " + totalPrice.toFixed(2);
  shoppingCart.appendChild(totalPriceDisplay);
}


displayProducts();
