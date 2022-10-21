// Guess the Number Game


function myFunction() {
let x = Math.random() * 100;
x = Number.parseInt(x);
let game;
let score = 100;
while (game != x) {
  score == score--;
  game = prompt("Guess a random number");
  if (game == x) {
    y = alert("congrats! you guessed the number correctly");

  }

  else if (game < x) {
    y = alert("your guessed number is smaller than that number");
  }
  else if (game > x) {
    y = alert("your guessed number is greater than that number");

  }
  else ("pLease enter a number between 0 to 100");
}

console.log(`Hurray! your total score is ${100 - (100 - score)}% 😄`);
  }