let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    initBoard(16);

    let popup = document.querySelector("#popup");
    popup.addEventListener("click", function() {
        let size = sizeIn();
        initBoard(size);
    });
});

function initBoard(size) {
    let board = document.querySelector(".container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function sizeIn() {
    let choice = prompt("Select a grid size");
    let message = document.querySelector(".message");
    if (choice == "") {
        message.innerHTML = "Provide a valid number";
    }
    else if (choice <= 0 || choice > 100) {
        message.innerHTML = "Choose a number between 1-100";
    }
    else {
        message.innerHTML = "Start";
        return choice;
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function setColor(colorIn) {
    color = colorIn;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}