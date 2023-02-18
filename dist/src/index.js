//////// Menu toggler
const toggler = document.querySelector(".toggler");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu");

// Toggle mobile menu
toggler.addEventListener("click", (e) => {
  e.preventDefault();

  hamburger.classList.toggle("close");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Toggle mobile menu on outside click
document.body.addEventListener("click", (e) => {
  if (e.target !== toggler && hamburger.classList.contains("close")) {
    hamburger.classList.toggle("close");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  }
});

//////// Modals
let modalOpen = false;

const overflowHandler = () => {
  if (modalOpen) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
};

// //// Meal Planner modal
// const mealModal = document.getElementById("meal-modal");
// const mealBtn = document.getElementById("meal-btn");
// const mealClose = document.querySelector(".meal-close");

// // Open meal modal
// mealBtn.addEventListener("click", () => {
//   mealModal.style.display = "block";
//   modalOpen = true;
//   overflowHandler();
// });

// // Close meal modal
// mealClose.addEventListener("click", () => {
//   mealModal.style.display = "none";
//   modalOpen = false;
//   overflowHandler();
// });

//// Book log modal
const bookModal = document.getElementById("book-modal");
const bookBtn = document.getElementById("book-btn");
const bookClose = document.querySelector(".book-close");

// Open book modal
bookBtn.addEventListener("click", () => {
  bookModal.style.display = "block";
  modalOpen = true;
  overflowHandler();
});

// Close book modal
bookClose.addEventListener("click", () => {
  bookModal.style.display = "none";
  modalOpen = false;
  overflowHandler();
});

//// Shift tracker modal
const shiftModal = document.getElementById("shift-modal");
const shiftBtn = document.getElementById("shift-btn");
const shiftClose = document.querySelector(".shift-close");

// Open shift tracker modal
shiftBtn.addEventListener("click", () => {
  shiftModal.style.display = "block";
  modalOpen = true;
  overflowHandler();
});

// Close shift tracker modal
shiftClose.addEventListener("click", () => {
  shiftModal.style.display = "none";
  modalOpen = false;
  overflowHandler();
});

//// Pokedex modal
const pokeModal = document.getElementById("poke-modal");
const pokeBtn = document.getElementById("poke-btn");
const pokeClose = document.querySelector(".poke-close");

// Open pokedex modal
pokeBtn.addEventListener("click", () => {
  pokeModal.style.display = "block";
  modalOpen = true;
  overflowHandler();
});

// Close pokedex modal
pokeClose.addEventListener("click", () => {
  pokeModal.style.display = "none";
  modalOpen = false;
  overflowHandler();
});

// Close all modals on outside click
window.addEventListener("click", (e) => {
  if (e.target == bookModal) {
    bookModal.style.display = "none";
    modalOpen = false;
    overflowHandler();
  } else if (e.target == shiftModal) {
    shiftModal.style.display = "none";
    modalOpen = false;
    overflowHandler();
  } else if (e.target == pokeModal) {
    pokeModal.style.display = "none";
    modalOpen = false;
    overflowHandler();
  }
});
