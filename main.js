document.body.onload = init;

//Variables


//Styling for div.app

//Start button
button.type = 'button';
button.id = 'start';
button.value = 'Start';
button.className = 'stbtn';
container.appendChild(startButton);

button.onclick = drawBoard;

//Reset button

button.type = 'button';
button.id = 'reset';
button.value = 'Reset';
button.className = 'rstbtn';
container.appendChild(resetButton);

button.onclick = init;

// init function
function init() {
    var title = document.createElement("TITLE");
    var t = document.createTextNode("Title");
    title.appendChild(t);

    document.getElementById("app").innerHTML = "Tic-Tac-Toe";
}

//drawBoard function
function drawBoard() {

}

//setState function
function setState() {

}

//handleClick function
function handleClick() {

}

//updateSpace function
function updateSpace() {

}

//checkWinConditions function
function checkWinConditions() {

}

//changePlayer function
function changePlayer() {

}

//gameResult function
function gameResult() {

}

//finishGame function
function finishGame() {

}

//resetGame function
function resetGame() {
    //clear DOM
    //make all spaces clear and clickable

}

//makeMove function
function makeMove() {

}