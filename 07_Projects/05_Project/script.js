// Generating a random number between 1 to 100.
let randomNum = parseInt(Math.random() * 100 + 1);
let level = 0; // Start from level 0 (First Level)

// Function to determine the allowed attempts dynamically
function getAttemptsForLevel(level) {
    return Math.max(10 - level * 2, 1); // Reduces by 2 attempts per level but never goes below 1
}

// Selecting DOM Elements
const SubmitButton = document.querySelector('#subt');
const userInputBox = document.querySelector('#guessField');
const GuessesNum = document.querySelector('.guesses');
const RemainingGuess = document.querySelector('.lastResult');
const hintMessage = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');
const AttemptMessage = document.querySelector('.attempt');

const paragraph = document.createElement('p'); // Creating paragraph for new game button

let previousGuess = []; // Store previous guesses
let NumOfGuesses = 1; // Tracks the number of guesses
let PlayGame = true; // Flag to track if the game is active

if (PlayGame) {
    SubmitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInputBox.value);
        ValidGuess(guess);
    });
}

function ValidGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please Enter a Valid Number Between 1 and 100');
    } else {
        previousGuess.push(guess);
        let maxAttempts = getAttemptsForLevel(level);

        if (NumOfGuesses >= maxAttempts) {
            displayGuess(guess);
            displayMessage(`Game Over. The correct number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        level++; // Move to the next level

        let nextAttempts = getAttemptsForLevel(level);
        if (nextAttempts > 0) {
            displayMessage(`🎉 Level ${level + 1} Unlocked! You now have ${nextAttempts} attempts.`);
            endGame();
            newGame();
        } else {
            displayMessage(`🎉 Congratulations! You completed all levels!`);
            endGame();
        }
    } else {
        displayMessage(guess < randomNum ? `Your number is too low` : `Your number is too high`);
    }
}

function displayGuess(guess) {
    userInputBox.value = '';
    GuessesNum.innerHTML += `${guess} `;
    RemainingGuess.innerHTML = `${getAttemptsForLevel(level) - NumOfGuesses}`;
    NumOfGuesses++;
}

function displayMessage(message) {
    hintMessage.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInputBox.value = '';
    userInputBox.setAttribute('disabled', '');
    paragraph.classList.add('button');
    paragraph.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    StartOver.appendChild(paragraph);
    PlayGame = false;

    const NewGameButton = document.querySelector('#newGame');
    if (NewGameButton) {
        NewGameButton.style.cursor = 'pointer';
    }

    newGame();
}

function newGame() {
    const NewGameButton = document.querySelector('#newGame');
    NewGameButton.addEventListener('click', function () {
        randomNum = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        NumOfGuesses = 1;
        GuessesNum.innerHTML = '';
        RemainingGuess.innerHTML = getAttemptsForLevel(level);
        AttemptMessage.innerHTML = getAttemptsForLevel(level);
        userInputBox.disabled = false;
        SubmitButton.disabled = false;
        StartOver.removeChild(paragraph);
        displayMessage(`New Game - Level ${level + 1}`);
        PlayGame = true;
    });
}
