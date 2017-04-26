import React, { Component } from 'react';
import Board from './Board';

class BoardGrid extends Component {
  render() {
    return (
      <div className="boards-container">
        <div className="grid-control-panel">
          <button className='add-board-button' onClick={ () => this.props.addBoard() }>Add a Board</button>
          <button className='clear-boards-button' onClick={ () => this.props.clearBoards() }>Clear All Boards</button>
        </div>
        <div className="board-grid">
          {this.props.boards.map((board, i) => <Board key={ i } i={ i } board={ board }
            nextTurn={ this.props.nextTurn } removeBoard={ this.props.removeBoard }
          />)}
        </div>
      </div>
    );
  }
}

export default BoardGrid;
