"use strict";

// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);

  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".score").value = 20;
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "45rem";
    document.querySelector("h1").textContent =
      "Winner Winner Chicken Dinner!!!";
    if (score > document.querySelector(".highscore").textContent) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (!guess) {
    document.querySelector(".message").textContent = "Please enter a Number";
    document.querySelector(".score").textContent = score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You Lose!!!";
      document.querySelector("body").style.backgroundColor = "#FF0D00";
      document.querySelector(".number").textContent = "You Lose!";
      document.querySelector(".number").style.width = "80rem";
      document.querySelector("h1").textContent = "Sorry, You Lost!!!";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!";
    document.querySelector(".score").textContent = score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You Lose!!!";
      document.querySelector("body").style.backgroundColor = "#FF0D00";
      document.querySelector(".number").textContent = "You Lose!";
      document.querySelector(".number").style.width = "80rem";
      document.querySelector("h1").textContent = "Sorry, You Lost!!!";
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High!";
    document.querySelector(".score").textContent = score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You Lose!!!";
      document.querySelector("body").style.backgroundColor = "#FF0D00";
      document.querySelector(".number").textContent = "You Lose!";
      document.querySelector(".number").style.width = "80rem";
      document.querySelector("h1").textContent = "Sorry, You Lost!!!";
    }
  }
});
