// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let randomNumber = Math.floor(Math.random() * 10) + 1;
const guess = document.getElementById('guess');
const lastGuess = document.getElementById('lastGuess');
const lowOrHigh = document.getElementById('lowOrHigh');

const submitGuess = document.getElementById('submitGuess');
const numberGuess = document.getElementById('numberGuess');

let guessCount = 1;
let buttonReset;

function checkGuess() {
    let userGuess = Number(numberGuess.value);
    if(guessCount === 1) {
        guess.textContent = 'Previous Guesses: ';
    }
    guess.textContent+=userGuess+' ';

    if(userGuess === randomNumber) {
        lastGuess.textContent = 'You are right!';
        lowOrHigh.textContent = '';
        setGameOver();
     } else if (guessCount === 2) {
        lastGuess.textContent = 'Sorry...Game Over!';
        lowOrHigh.textContent = '';
        setGameOver();
     } else {
        lastGuess.textContent = 'Try Again!';
        if(userGuess < randomNumber) {
            lowOrHigh.textContent = 'Try a higher number';
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'Try a lower number';
        }

     }

     guessCount++;
     numberGuess.value = '';
     numberGuess.focus();
}

submitGuess.addEventListener('click', checkGuess);

function setGameOver() {
    numberGuess.disabled = true;
    submitGuess.disabled = true;
    buttonReset = document.createElement('button');
    buttonReset.textContent = 'Restart Game';
    document.body.appendChild(buttonReset);
    buttonReset.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
        const resultParams = document.querySelectorAll('.resultParams p');
    for (let i = 0; i < resultParams.length; i++) {
        resultParams[i].textContent = '';
    }

    buttonReset.parentNode.removeChild(buttonReset);
    numberGuess.disabled = false;
    submitGuess.disabled = false;
    numberGuess.value = '';
    numberGuess.focus();

    randomNumber = Math.floor(Math.random() * 10) + 1;
}