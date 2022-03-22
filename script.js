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

let correctWord = "QUICK";
console.log(correctWord);

for (const letter of correctWord) {
  console.log(letter);
}

const guessInput = document.getElementById("guess-0");
// console.log(guessInput);
const guess = guessInput.value.split("");
console.log(guess);

//write a function to split out the input word to five boxes and then clear input boxx

const row = document.getElementsByClassName("row")[0];

guessInput.addEventListener("input", function () {
  guessInput.value = guessInput.value.toUpperCase();
  for (const index in guessInput.value) {
    const square = row.querySelectorAll(".square")[index];
    square.textContent = guessInput.value[index];
  }
});
