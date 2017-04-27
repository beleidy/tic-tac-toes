// A reducer takes a copy of the state and the action, and returns a new state.
// A reducer should not mutate state but return a fresh copy.

// This is the function that will take an array of 9 elements (a board),
// the current player and checks for a win
function didWin(tiles, player) {
  const currentPlayer = player ? 'X' : 'O';
  const winFlag =
      // Check Verticals
      (tiles[0][0] === currentPlayer && tiles[0][1] === currentPlayer && tiles[0][2] === currentPlayer) ||
      (tiles[1][0] === currentPlayer && tiles[1][1] === currentPlayer && tiles[1][2] === currentPlayer) ||
      (tiles[2][0] === currentPlayer && tiles[2][1] === currentPlayer && tiles[2][2] === currentPlayer) ||
      //  Check Horizontals
      (tiles[0][0] === currentPlayer && tiles[1][0] === currentPlayer && tiles[2][0] === currentPlayer) ||
      (tiles[0][1] === currentPlayer && tiles[1][1] === currentPlayer && tiles[2][1] === currentPlayer) ||
      (tiles[0][2] === currentPlayer && tiles[1][2] === currentPlayer && tiles[2][2] === currentPlayer) ||
      // Check diagonals
      (tiles[0][0] === currentPlayer && tiles[1][1] === currentPlayer && tiles[2][2] === currentPlayer) ||
      (tiles[0][2] === currentPlayer && tiles[1][1] === currentPlayer && tiles[2][0] === currentPlayer);
    
  return winFlag;
}

// A function that takes a board's tiles and returns true if it's full
function isFull(tiles) {
  // Iterate through tiles and return flase if there is an unplayed cell
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tiles[i][j] === ' ') {
        return false;
      }
    }
  }
  // If we exit the loop without returning false, then we return true
  return true;
}

function boards(state = [], action) {
  console.log(action.boardIndex);
  console.debug(action.position);

  switch (action.type) {
    // If the action is to play next turn
    case '@@board/NEXT_TURN': {
      // If for the target board there is still no winner
      if (state[action.boardIndex].winner === false) {
        // Copy the current state and isolate the required board
        const nextState = state.slice();
        const newBoard = nextState[action.boardIndex];

        // If the position has not been played before
        if (newBoard.tiles[action.position[0]][action.position[1]] === ' ') {
          // Change the target position to the next player's letter
          newBoard.tiles[action.position[0]][action.position[1]] = newBoard.xIsNext ? 'X' : 'O';
          // Check if current player won
          if (didWin(newBoard.tiles, newBoard.xIsNext)) {
            newBoard.winner = newBoard.xIsNext ? 'X' : 'O';
          } else if (isFull(newBoard.tiles)) {
            // Check if the board is full
            // If it is, set winner to Tie
            newBoard.winner = 'T';
          }
          // Toggle next player
          newBoard.xIsNext = !newBoard.xIsNext;
          // Return the new state
          return nextState;
        }
      }
      // If none of the conditions to change the state are met, return the state as is
      return state;
    }

    case '@@grid/ADD_BOARD': {
      const emptyBoard = {
        xIsNext: true,
        winner: false,
        tiles: [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ],
      };

      // Copy the state and push an empty board at the end of it
      const nextState = state.slice();
      nextState.push(emptyBoard);
      // Return the new state
      return nextState;
    }

    case '@@grid/REMOVE_BOARD': {
      const nextState = state.slice();
      nextState.splice(action.boardIndex, 1);
      return nextState;
    }

    case '@@grid/CLEAR_BOARDS': {
      // Copy state
      const nextState = state.slice();
      // Get the current number of boards on the page
      const gridSize = nextState.length;
      // Loop through the state and put empty boards instead of current ones
      for (let i = 0; i < gridSize; i++) {
        nextState[i] = {
          xIsNext: true,
          winner: false,
          tiles: [
              [' ', ' ', ' '],
              [' ', ' ', ' '],
              [' ', ' ', ' '],
          ],
        };
      }
      return nextState;
    }

    default:
      return state;
  }
}

export default boards;
