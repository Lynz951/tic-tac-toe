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
    3. ['', '', '', 'x', 'x', 'x', '', '', ''] - middle horizontal
    4. ['', '', '', '', '', '', 'x', 'x', 'x'] - bottom horizontal
    5. ['x', '', '', 'x', '', '', 'x', '', ''] - left vertical
    6. ['', 'x', '', '', 'x', '', '', 'x', ''] - middle vertical
    7. ['', '', 'x', '', '', 'x', '', '', 'x'] - right vertical 
    8. ['x', '', '', '', 'x', '', '', '', 'x'] - top left to bottom right diagonal
    9. ['', '', 'x', '', 'x', '', 'x', '', ''] - top right to bottom left diagonal
  -use indexOf boardState (ex: [0, 1, 2] equals a win 
 
 3. boardState: This is what spaces are taken and available by both players. This can be an array.
  -ex: ['', 'o', '', '', '', '', '', '', 'x']
  -both players have gone once. x starts so now it is o's turn
  -use indexes to ID each space
  -each space gets an event handler
  -event handler is turned off when occupied by a players symbol
  -find indexof
  
4. gameState: active/winner/reset

Functionality: 

FUNCTION init:
  - The original screen will be a title for the game and a start button
  - Onclick a function drawBoard is called
  -

FUNCTION drawBoard: 
  - The layout of the board will use bootstrap to create 3 rows of 3 col-4s
  - The lines of the board will be tricky...
  - This is also used for reset
  - All spaces are blank
  - There is a space (div) for a reset button
  - There is a space (div) to tell who's turn it is => this space also tells when there is a winner

FUNCTION setState:
 - There are 4 states
 1. playerTurn: Whos turn is it?
 2. winConditions: 
 3. boardState: What spaces on the board are taken/available?
 4. gameState: still not sure what this is...

FUNCTION handleClick:
  - This is similar to change player
  - When a space is clicked:
    - Who clicked? (Who's turn is it? (playerTurn)
    - If it is player 1's turn, change that space from empty to x (updateSpace)
    - disable onclick?
    - changePlayer

FUNCTION updateSpace:
   - change space from empty to filled with x or o
   - make space unclickable

FUNCTION checkWinCond:
   - After space is clicked check indexOf spaces array
   - If spaces array matches any win conditions change player's turn div to say who won (player 1 or 2) (gameResult)
   - disable clickablility on all spaces (finishGame)

FUNCTION changePlayer:
  - Event handler toggles from 'x' to 'o'

FUNCTION gameResult:
 - When a player wins change "Player '''s turn" to "Player '' won!
 - If there is a tie, change "Player '''s turn" to "Its a tie!"
 - run finishGame

FUNCTION finishGame: 
 - when player wins or there is a tie, make all spaces unclickable

FUNCTION resetState:
 - When reset game button is clicked, run drawBoard

FUNCTION makeMove:
 - When player 1's turn
   - updateSpace
   - changePlayer to player 2
 - When player 2's turn
   - updateSpace
   - changePlayer to player 1


  
  
 
 
 
 
 
 
