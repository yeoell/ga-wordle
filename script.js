// console.log("hello");

//select random word
function randomWord(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];
  return item;
}

function generateWord() {
  const gameWord = randomWord(validWords);
  // console.log(gameWord);
  return gameWord;
}

const validWords = [
  "QUICK",
  "HELLO",
  "TRASH",
  "JUMPS",
  "FRONT",
  "ZIPPY",
  "BLAND",
  "TOUGH",
  "EXTRA",
  "WAVES",
];

// generateWord();

const wordWinner = generateWord();
// console.log(wordWinner);

let correctLetters = ["Q", "U", "I", "C", "K"];

const guess = document.getElementById("guess-1");
const output = document.getElementsByClassName("square")[0];

guess.addEventListener("input", function () {
  guess.value = guess.value.toUpperCase();
  output.textContent = guess.value;
});
