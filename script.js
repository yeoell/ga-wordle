//select random word
function randomWord(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];
  return item;
}

function generateWord() {
  const gameWord = randomWord(validWords);
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

const correctWord = generateWord();
console.log(correctWord);

const guessInput = document.getElementById("guess");
const button = document.getElementById("submit");
let row = document.querySelectorAll(".row"); //go through all boxes
let nextRow = 0;

let box = document.getElementsByClassName("square"); //go through all squares
let nextBox = 0;

button.addEventListener("click", function () {
  //must compare against acceptable words before inputting, show error if not acceptable word
  let row = document.querySelectorAll(".row")[nextRow];
  nextRow = nextRow + 1;

  guessInput.value = guessInput.value.toUpperCase();
  for (const index in guessInput.value) {
    // console.log(guessInput.value[index]);
    const square = row.querySelectorAll(".square")[index];
    square.textContent = guessInput.value[index];
  }

  //if the letter in the square matches the corrosponding letter of the correct word
  //the background colour should become green
  //if the letter is in the word but in the wrong spot, background should be yellow
  //if it's not there at all, background should be grey
  function letterMatch() {
    console.log(guessInput.value);

    for (let index in correctWord) {
      const correctLetters = correctWord[index];
      // console.log(correctLetters);
      const guessedLetters = guessInput.value[index];
      // console.log(guessInput);
      let row = document.querySelectorAll(".row")[nextBox];
      // console.log(nextBox);
      console.log(nextBox);
      if (guessedLetters === correctLetters) {
        console.log(box[nextBox]);
        // console.log("success");
        box[nextBox].classList.add("correct");
      } else if (correctWord.includes(guessedLetters)) {
        box[nextBox].classList.add("match");
        // console.log("test");
      } else if (guessedLetters != correctLetters) {
        box[nextBox].classList.add("incorrect");
      }
      nextBox = nextBox + 1;
    }
  }
  letterMatch();
  document.getElementById("guess").value = "";
});
