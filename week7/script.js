/* =======================
   PART 2: Functions Demo
   ======================= */

// Global variable
let globalMessage = "Hello from global scope!";

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b; // Return sum
}

// Function showing local vs global scope
function demonstrateScope() {
  let localMessage = "Hello from local scope!";
  return localMessage + " | " + globalMessage;
}

// Function to display calculation on page
function showCalculation(x, y) {
  let result = addNumbers(x, y); // Reuse function
  document.getElementById("calc-result").textContent = `Result: ${result}`;
}

// Immediately show scope demo on page load
document.getElementById("scope-demo").textContent = demonstrateScope();


/* =======================
   PART 3: JS + CSS Combo
   ======================= */

// Function to toggle CSS animation on box
function toggleBox() {
  let box = document.querySelector(".animate-box");
  box.classList.toggle("active");
}
