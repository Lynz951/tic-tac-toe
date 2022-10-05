//document.body.onload = init;

//Variables

// var title = document.createElement("TITLE");
// var t = document.createTextNode("Title");
// title.appendChild(t);

// document.getElementById("app").innerHTML = "Tic-Tac-Toe";

const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

//Styling for div.app

//Start button
startButton.type = 'button';
startButton.id = 'start';
startButton.value = 'Start';
startButton.className = 'btn';
app.appendChild(start);

startButton.onclick = drawBoard;

//Reset button

resetButton.type = 'button';
resetButton.id = 'reset';
resetButton.value = 'Reset';
resetButton.className = 'btn';
app.appendChild(reset);

resetButton.onclick = init;

// // init function
// function init() {
//     var title = document.createElement("TITLE");
//     var t = document.createTextNode("Title");
//     title.appendChild(t);

//     document.getElementById("app").innerHTML = "Tic-Tac-Toe";
// }

// //drawBoard function
// function drawBoard() {

// }

// //setState function
// function setState() {

// }

// //handleClick function
// function handleClick() {

// }

// //updateSpace function
// function updateSpace() {

// }

// //checkWinConditions function
// function checkWinConditions() {

// }

// //changePlayer function
// function changePlayer() {

// }

// //gameResult function
// function gameResult() {

// }

// //finishGame function
// function finishGame() {

// }

// //resetGame function
// function resetGame() {
//     //clear DOM
//     //make all spaces clear and clickable

// }

// //makeMove function
// function makeMove() {

// }