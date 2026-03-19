// 1. Score variable
let score = 0;

// 2. Grab references to all moles
const moles = document.getElementsByClassName("mole");

// 3. Function to show one random mole at a time
function showRandomMole() {
    // Hide all moles first
    for (let i = 0; i < moles.length; i++) {
        moles[i].style.display = "none";
    }

    // Show a random one
    const randomIndex = Math.floor(Math.random() * moles.length);
    moles[randomIndex].style.display = "block";
}

// 4. Function to "whack" a mole
function whackMole() {
    // Increase the score
    score += 1;
    document.getElementById("score").innerText = score;

    // Hide the mole you just hit
    this.style.display = "none";
}

// 5. Function to start the game

let gameInterval;

function startGame() {
    // Reset score
    score = 0;
    document.getElementById("startBtn").innerText = "Reset";
    document.getElementById("score").innerText = score;
    
    clearInterval(gameInterval)
    // Show a random mole every second
    
    gameInterval=setInterval(showRandomMole, 1000);
}

// 6. Attach click event to each mole
for (let i = 0; i < moles.length; i++) {
    moles[i].addEventListener("click", whackMole);
}

/* Edited:
Changed from "score" to "startBtn" in function startGame

Removed s frome moles in //2

Fixed the miss spelled word length in moles.length

Removed = from the for loop at the bottom. This for loop will search for mole[5] wich does not exist.

Made the game possible to reset with changing the start button text from updating the score to say Reset.
Also made a new variable gameInterval to be able to clear the game. 
This way it is not possible to start multiple games at once.
*/