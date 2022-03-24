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
const correctWordMatch = correctWord.split("");
console.log(correctWordMatch);

//output guess input into squares (first row only)
const guessInput = document.getElementById("guess");
const box = document.getElementsByClassName("square")[0]; //go through all squares
const button = document.getElementById("submit");
const row = document.querySelectorAll(".row")[0]; //go through all boxes

button.addEventListener("focus", function () {
  guessInput.value = guessInput.value.toUpperCase();
  for (const index in guessInput.value) {
    // console.log(guessInput.value[index]);
    const square = row.querySelectorAll(".square")[index];
    square.textContent = guessInput.value[index];
    // console.log(square);
  }
  function letterMatch() {
    console.log(guessInput.value);
    for (const letter of guessInput.value) {
      console.log(letter);
      if (guessInput.value === correctWordMatch) {
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

//if the letter in the square matches the corrosponding letter of the correct word
//the background colour should become green
//if the letter is in the word, background should be yellow
//if it's not there at all, background should be grey
//if if if
