//document.body.onload = init;

//Variables

let player = 'X';
console.log(player);
let boardState = ['', '', '', '', '', '', '', '', ''];
console.log(boardState);
let playerTurn = 1; 
console.log(playerTurn);

// var title = document.createElement("h1");
// title.id = 'title'
// title.innerHTML = 'Tic Tac Toe'
// document.body.appendChild(title)


// const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

//Styling for div.app

//Start button
// startButton.type = 'button';
// startButton.id = 'start';
// startButton.value = 'Start';
// startButton.className = 'btn';
// app.appendChild(start);

// startButton.onclick = drawBoard;

//Reset button

resetButton.type = 'button';
resetButton.id = 'reset';
resetButton.value = 'Reset';
resetButton.className = 'btn';
app.appendChild(reset);

resetButton.onclick = init;

//Functions for buttons

function function0() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(0, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(0, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function1() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(1, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(1, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function2() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(2, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(2, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function3() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(3, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(3, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function4() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(4, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(4, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function5() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(5, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(5, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function6() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(6, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(6, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function7() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(7, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(7, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

function function8() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(8, 1, 'X');
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(8, 1, 'O');
        playerTurn = playerTurn + 1;
    }
}

// function function0() {
//     if (boardState[0] = null) {
//         let boardState = boardState[0].splice('', 'X');
//     } 
//     return newBoardState;
// }

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
function changePlayer () {
    if (player === 'X') {
        player = 'O';
    } else if (player === 'O') {
        player = 'X';
    }      
}
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