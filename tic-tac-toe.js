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
