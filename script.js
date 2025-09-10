//📚✨ Part 2: JavaScript Functions — Scope, Parameters & Return Values

//Write several custom functions that take in parameters and return useful values
function add(a,b){
    return a +b 
}

let sum= add (5,3)
console.log(sum);

function minus(a,b){
    return(a-b)
}//Output:-2

let subtract = minus(4,6)
console.log(subtract)

//Demonstrate understanding of local vs global scope

// Local scope demo
function localExample() {
    let localName = "Winnie (local)";
    console.log(localName);
}
localExample();
// console.log(localName); // would error

// Global scope demo
let globalName = "Winnie (global)";
function globalExample() {
    console.log(globalName);
}
globalExample();
console.log(globalName); // works

// --- DOM Manipulation ---
const box = document.getElementById("box");

// Resize button
document.getElementById("resizeBtn").addEventListener("click", () => {
  const w = randomBetween(50, 200);
  const h = randomBetween(50, 200);
  box.style.width = w + "px";
  box.style.height = h + "px";
  console.log("Resized to:", w, "x", h);
});

// Spin toggle button
document.getElementById("spinBtn").addEventListener("click", () => {
  box.classList.toggle("spin");
  console.log("Spin toggled");
});

// Helper function to generate a random number between min and max (inclusive)
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to generate a random color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Random color button
document.getElementById("colorBtn").addEventListener("click", () => {
  const newColor = randomColor();
  box.style.backgroundColor = newColor;
  console.log("New color:", newColor);
});

//Part 3 
// Flip card on button click
document.getElementById("flipBtn").addEventListener("click", function () {
  document.getElementById("card").classList.toggle("flipped");
});
