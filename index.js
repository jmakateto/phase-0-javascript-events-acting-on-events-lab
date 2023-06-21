// Your code here
// Step 1: Grab the dodger element
const dodger = document.getElementById("dodger");

// Step 2: Define the moveDodgerLeft function
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Step 3: Define the moveDodgerRight function
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming the game field width is 400px
    dodger.style.left = `${left + 1}px`;
  }
}

// Step 4: Add event listeners to call the move functions
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
