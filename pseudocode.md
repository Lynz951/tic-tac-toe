##Tic-Tac-Toe Pseudocode

 About:
 
 - Tic-tac-toe is a game for two players
 - One player is x's and one player is o's
 - Players take turns placing their symbol in one of the spaces on a 3x3 grid
 - Player wins by getting their symbols in a row of 3, veritically, horizontally, or diagonally
 - The 3x3 grid can be expressed by an array with 9 spaces
 
 Init: Create my states
 
 1. playerTurn: 'x' or 'o'
 
 2. winConditions: There are 8 different combitions of 3 in a row that equal a win for a player
    1. ['x', 'x', 'x', '', '', '', '', '', ''] - top horizontal
    2. ['', '', '', 'x', 'x', 'x', '', '', ''] - middle horizontal
    3. ['', '', '', '', '', '', 'x', 'x', 'x'] - bottom horizontal
    4. ['x', '', '', 'x', '', '', 'x', '', ''] - left vertical
    5. ['', 'x', '', '', 'x', '', '', 'x', ''] - middle vertical
    6. ['', '', 'x', '', '', 'x', '', '', 'x'] - right vertical 
    7. ['x', '', '', '', 'x', '', '', '', 'x'] - top left to bottom right diagonal
    8. ['', '', 'x', '', 'x', '', 'x', '', ''] - top right to bottom left diagonal
 
 3. boardState: This is what spaces are taken and available by both players. This can be an array.
  -ex: ['', 'o', '', '', '', '', '', '', 'x']
  -both players have gone once. x starts so now it is o's turn
  -use indexes to ID each space
  -each space gets an event handler
  -event handler is turned off when occupied by a players symbol
  
4. gameActive: What is this?

5. Winner: when there is a winner this will show who it is

Functionality: 

FUNCTION init:
  - The original screen will be a title for the game and a start button
  - Onclick a function drawBoard is called
  -

FUNCTION drawBoard: 
  - The layout of the board will use bootstrap to create 3 rows of 3 col-4s
  - The lines of the board will be tricky...
  - This is also used for reset

FUNCTION setState:

FUNCTION handleClick:
  - This is similar to change player

FUNCTION updateSpace:

FUNCTION checkWinCond:

FUNCTION changePlayer:
  - Event handler toggles from 'x' to 'o'

FUNCTION gameResult:

FUNCTION finishGame:

FUNCTION resetState:

FUNCTION makeMove:


  
  
 
 
 
 
 
 
