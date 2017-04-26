// This is the initial number of boards when user loads page. Change here to change default
const initialNumberOfBoards = 3;

// Create an array with default number of elements,
// create a new Object in each element and give them default properties
const boards = new Array(initialNumberOfBoards);
for (let i = 0; i < initialNumberOfBoards; i++) {
  boards[i] = {
    xIsNext: true,
    winner: false,
    tiles: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ],
  };
}

// Export this to be used for default state when loading the page
export default boards;
