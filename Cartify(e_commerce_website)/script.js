// navbar / hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// scroll btns
function scrollleft(button) {
  const cards = button.parentElement.querySelector(".cards");
  cards.scrollBy({ left: -400, behavior: "smooth" });
}

function scrollRight(button) {
  const cards = button.parentElement.querySelector(".cards");
  cards.scrollBy({ left: 400, behavior: "smooth" });
}

// cart items
let totalItems = 0;
let totalPrice = 0;
const itemPrices = [];
function addToCart(button) {
  const priceText =
    button.parentElement.querySelector(".lin-second").textContent;
  const itemPrice = parseInt(priceText.replace("Price: $", "").trim());

  // Adding the price
  itemPrices.push(itemPrice);

  totalItems += 1;
  totalPrice += itemPrice;
  updateCart();
}

function changeItemQuantity(change) {
  if (change === -1 && totalItems > 0) {
    // Remove the last item's price
    const lastPrice = itemPrices.pop();
    totalPrice -= lastPrice;
  }

  totalItems = itemPrices.length;
  updateCart();
}

function updateCart() {
  document.getElementById("item-count").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice;
}
