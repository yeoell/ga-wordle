//start game
alert("Are you ready?");

//select random word
function randomWord(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];
  return item;
}

function generateWord() {
  const gameWord = randomWord(playableWords);
  return gameWord;
}

const correctWord = generateWord();
console.log(correctWord);

//user inputs
const guessInput = document.getElementById("guess");
const guessEnter = document.getElementById("guess");
const button = document.getElementById("submit");

//grid elements
let row = document.querySelectorAll(".row"); //go through all boxes
let nextRow = 0;

let box = document.getElementsByClassName("square"); //go through all squares
let nextBox = 0;

//to win or lose
let correctLetterCount = 0;
let column = document.querySelectorAll(".first");
let columnNumber = 0;

//inputting guess
guessEnter.addEventListener("change", function () {
  //compare against valid words before inputting
  if (validWords.includes(guessInput.value.toUpperCase())) {
  } else {
    alert("Sorry, that's not a word. Try again.");
    document.getElementById("guess").value = "";
    return;
  }

  //changes rows
  let row = document.querySelectorAll(".row")[nextRow];
  nextRow = nextRow + 1;
  let column = document.querySelectorAll(".first")[columnNumber];
  columnNumber = columnNumber + 1;

  guessInput.value = guessInput.value.toUpperCase();
  for (const index in guessInput.value) {
    const square = row.querySelectorAll(".square")[index];
    square.textContent = guessInput.value[index];
  }

  //letter evaluation
  function letterMatch() {
    for (let index in correctWord) {
      const correctLetters = correctWord[index];
      const guessedLetters = guessInput.value[index];
      let row = document.querySelectorAll(".row")[nextBox];

      if (guessedLetters === correctLetters) {
        correctLetterCount = correctLetterCount + 1;
        box[nextBox].classList.add("correct");
      } else if (correctWord.includes(guessedLetters)) {
        box[nextBox].classList.add("match");
      } else if (guessedLetters != correctLetters) {
        box[nextBox].classList.add("incorrect");
      }
      nextBox = nextBox + 1;
    }

    if (correctLetterCount == 5) {
      const outcomeMessage = document.getElementById("outcome");
      outcomeMessage.textContent = "You win!";
      // adapted the reset function from https://www.quackit.com/javascript/javascript_refresh_page.cfm
      function resetGame(refreshPage) {
        setTimeout("location.reload(true);", refreshPage);
      }
      resetGame(2000);
    } else if (columnNumber == 6 && correctLetterCount != 5) {
      const outcomeMessage = document.getElementById("outcome");
      outcomeMessage.textContent =
        "You win some, you lose some. And you lost this one. The correct word is " + correctWord;
      function resetGame(refreshPage) {
        setTimeout("location.reload(true);", refreshPage);
      }
      resetGame(3000);
    }
  }
  letterMatch();
  document.getElementById("guess").value = "";
  correctLetterCount = 0;
});

//timer;
//https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      const outcomeMessage = document.getElementById("outcome");
      outcomeMessage.textContent = "You're out of time! The correct word is " + correctWord;
      // alert("You're out of time!\nThe correct word is " + correctWord);
      function resetGame(refreshPage) {
        setTimeout("location.reload(true);", refreshPage);
      }
      resetGame(2000);
    }
  }, 1000);
}

window.onload = function () {
  const threeMinutes = 60 * 3,
    display = document.querySelector("#count");
  startTimer(threeMinutes, display);
};
