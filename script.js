let currentPlayer = "X";
let gameOver = false;

let cells = document.querySelectorAll(".cell");
let turnText = document.getElementById("turn");
let restartButton = document.getElementById("restart");

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.textContent !== "" || gameOver) {
            return;
        }

        cell.textContent = currentPlayer;

        checkWinner();

        if (!gameOver) {
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

            turnText.textContent = "Player " + currentPlayer + "'s Turn";
        }
    });
});

function checkWinner() {

    for (let pattern of winningPatterns) {

        let a = cells[pattern[0]].textContent;
        let b = cells[pattern[1]].textContent;
        let c = cells[pattern[2]].textContent;

        if (a !== "" && a === b && b === c) {
            turnText.textContent = "Player " + a + " Wins! 🎉";
            gameOver = true;
            return;
        }
    }

    let draw = true;

    cells.forEach(function(cell) {
        if (cell.textContent === "") {
            draw = false;
        }
    });

    if (draw) {
        turnText.textContent = "It's a Draw!";
        gameOver = true;
    }
}

restartButton.addEventListener("click", function() {

    cells.forEach(function(cell) {
        cell.textContent = "";
    });

    currentPlayer = "X";
    gameOver = false;

    turnText.textContent = "Player X's Turn";
});