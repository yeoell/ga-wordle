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
const correctLetters = correctWord.split("");
console.log(correctLetters);

//output guess input into squares (first row only)
const guessInput = document.getElementById("guess");
const box = document.getElementsByClassName("square")[0]; //go through all squares
const button = document.getElementById("submit");
let row = document.querySelectorAll(".row")[2]; //go through all boxes
const rows = document.getElementsByClassName("master-row");
let nextRow = 0;

button.addEventListener("click", function () {
  //must compare against acceptable words before inputting, show error if not acceptable word
  let row = document.querySelectorAll(".row")[nextRow];
  console.log(nextRow);
  nextRow = nextRow + 1;
  console.log(nextRow);

  guessInput.value = guessInput.value.toUpperCase();
  for (const index in guessInput.value) {
    // console.log(guessInput.value[index]);
    const square = row.querySelectorAll(".square")[index];
    square.textContent = guessInput.value[index];
    // console.log(square);
  }

  // for (const row of rows) {
  //   console.log(row);
  // const nextRow = document.getElementsByClassName(".master-row .row")[row];
  // console.log(nextRow);
  // }

  //if the letter in the square matches the corrosponding letter of the correct word
  //the background colour should become green
  //if the letter is in the word but in the wrong spot, background should be yellow
  //if it's not there at all, background should be grey
  function letterMatch() {
    console.log(guessInput.value);
    for (const letter of guessInput.value) {
      console.log(letter);
      if (guessInput.value === correctWord) {
        console.log("success");
        box.classList.add("correct");
      } else {
        console.log("try again");
        box.classList.add("incorrect");
      }
    }
  }
  letterMatch();
  document.getElementById("guess").value = "";
});
