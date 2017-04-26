// Action creators are functions that return objects.
// These objects will be operated on by each reducer
// The action object will conventionally contain a type property describing the action,
// and a payload of information that the reducer will use to change the current state.

export function nextTurn(boardIndex, position) {
  return {
    type: '@@board/NEXT_TURN',
    boardIndex,
    position,
  };
}

export function addBoard() {
  return {
    type: '@@grid/ADD_BOARD',
  };
}

export function removeBoard(boardIndex) {
  return {
    type: '@@grid/REMOVE_BOARD',
    boardIndex,
  };
}

export function clearBoards() {
  return {
    type: '@@grid/CLEAR_BOARDS',
  };
}
