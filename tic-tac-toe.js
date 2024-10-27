document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach((square) => {
        square.classList.add("square");
    });
});

let currentPlayer = "X";
const boardState = Array(9).fill(null);

squares.forEach((square, index) => {
    square.addEventListener("click", () => {
        if (!boardState[index]) {
            boardState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.add("hover");
    });
    square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
    });
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            document.getElementById("status").textContent = `Congratulations! ${boardState[a]} is the Winner!`;
            document.getElementById("status").classList.add("you-won");
            return true;
        }
    }
    return false;
}

square.addEventListener("click", () => {
    if (!boardState[index] && !checkWinner()) {
        boardState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner();
    }
});

document.querySelector(".btn").addEventListener("click", () => {
    boardState.fill(null);
    squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("X", "O");
    });
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");
    currentPlayer = "X";
});

square.addEventListener("click", () => {
    if (!boardState[index] && !checkWinner()) {
        boardState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner();
    }
});
