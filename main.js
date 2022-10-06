//document.body.onload = init;

let player = 'X';
console.log(player);

//let state = {

    let boardState = ['', '', '', '', '', '', '', '', ''];
    console.log(boardState);

    let playerTurn = 1; 
    console.log(playerTurn);

    let windConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
//}

//Variables

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

//resetButton.onclick = init;

//Functions for buttons


let x0 = document.getElementById("x0");
x0.addEventListener("click", () => {
    function0();
    changePlayer();
    checkWinConditions(); 
})

function function0() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(0, 1, 'X');
    x0.innerHTML = 'X';
    console.log('Player turn before', playerTurn);
    playerTurn = playerTurn + 1;
    console.log('Player turn after', playerTurn);  
    } else if (player === 'O') {
        boardState.splice(0, 1, 'O');
        x0.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x1 = document.getElementById("x1");
x1.addEventListener("click", () => {
    function1();
    checkWinConditions();
    changePlayer();
})

function function1() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(1, 1, 'X');
    x1.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(1, 1, 'O');
        x1.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x2 = document.getElementById("x2");
x2.addEventListener("click", () => {
    function2();
    checkWinConditions();
    changePlayer();
})

function function2() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(2, 1, 'X');
    x2.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(2, 1, 'O');
        x2.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x3 = document.getElementById("x3");
x3.addEventListener("click", () => {
    function3();
    checkWinConditions();
    changePlayer();
})

function function3() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(3, 1, 'X');
    x3.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(3, 1, 'O');
        x3.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x4 = document.getElementById("x4");
x4.addEventListener("click", () => {
    function4();
    checkWinConditions();
    changePlayer();
})

function function4() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(4, 1, 'X');
    x4.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(4, 1, 'O');
        x4.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x5 = document.getElementById("x5");
x5.addEventListener("click", () => {
    function5();
    checkWinConditions();
    changePlayer();
})

function function5() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(5, 1, 'X');
    x5.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(5, 1, 'O');
        x5.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x6 = document.getElementById("x6");
x6.addEventListener("click", () => {
    function6();
    checkWinConditions();
    changePlayer();
})

function function6() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(6, 1, 'X');
    x6.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(6, 1, 'O');
        x6.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x7 = document.getElementById("x7");
x7.addEventListener("click", () => {
    function7();
    checkWinConditions();
    changePlayer();
})

function function7() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(7, 1, 'X');
    x7.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(7, 1, 'O');
        x7.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

let x8 = document.getElementById("x8");
x8.addEventListener("click", () => {
    function8();
    checkWinConditions();
    changePlayer();
})

function function8() {
    console.log(player === 'X');
    if (player === 'X') {
    boardState.splice(8, 1, 'X');
    x8.innerHTML = 'X';
    playerTurn = playerTurn + 1;  
    } else if (player === 'O') {
        boardState.splice(8, 1, 'O');
        x8.innerHTML = 'O';
        playerTurn = playerTurn + 1;
    }
}

// //checkWinConditions function
function checkWinConditions() {
    for (let i = 0; i < windConditions.length; i++) {
        const line = windConditions[i];
    if (
    boardState[0]
    && boardState[0] == boardState[1]
    && boardState[1] == boardState[2]
 ) {
    console.log('We have a winner!');
 } else {
    console.log('No winner yet. Keep trying!');
 }
 }
}

// //changePlayer function
function changePlayer () {

    if (playerTurn % 2 === 1) {
        player = 'X';
        console.log('Player 1 make your move');
    } else if (playerTurn % 2 === 0) {
        player = 'O';
        console.log('Player 2 make your move!');
    }
}

// // init function
// function init() {
//     var title = document.createElement("TITLE");
//     var t = document.createTextNode("Title");
//     title.appendChild(t);

//     document.getElementById("app").innerHTML = "Tic-Tac-Toe";
// }

// //drawBoard function - 
// function drawBoard() {

// }

// //setState function
// function setState() {

// }

// //handleClick function
// function handleClick() {
   // let space0 = createElement('div')

// }

// //updateSpace function
// function updateSpace() {

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

