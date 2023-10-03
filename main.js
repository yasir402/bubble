var tm;
var score = 0;
var numBubbles;

if (window.innerWidth >= 768) {
    numBubbles = 160;
} else {
    numBubbles = 145;
}

var interval;
var highScore = 0; // Initialize high score to 0

function bubbles() {
    var clutter = "";
    for (var i = 1; i <= numBubbles; i++) {
        var a = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}


function bubbles() {
    var clutter = "";
    for (var i = 1; i <= 160; i++) {
        var a = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}



function timer() {
    var timer = 60;
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(interval);
            alert("Game over");
            if (score > highScore) {
                highScore = score; // Update the high score if the current score is higher
                document.querySelector("#highscore").textContent = highScore; // Update the high score display
            }
            restartGame(); // Call the function to restart the game
        }
    }, 1000);
}

function hit() {
    tm = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = tm;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function restartGame() {
    score = 0;
    document.querySelector("#score").textContent = score;
    clearInterval(interval); // Clear the timer interval
    timer(); // Start a new timer
    hit();
    bubbles();
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickNumber = Number(details.target.textContent);
    if (clickNumber === tm) {
        increaseScore();
        hit();
        bubbles();
    }
});

hit();
timer();
bubbles();
