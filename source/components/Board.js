import React, { Component } from 'react';

class Board extends Component {
  render() {
    const self = this.props;

    return (
      <div className={ "board " + (self.board.winner === 'X' ? 'board-winner-x ' : '') +
        (self.board.winner === 'O' ? 'board-winner-o ' : '') +
        (self.board.winner === 'T' ? 'board-winner-tie  ' : '') }
      >
        <div className="board-remove" onClick={ self.removeBoard.bind(null, self.i) }>x</div>
        <div className="board-info">
          <span className="board-number">Board: {self.i + 1}</span>
          <span className="board-status">
            { self.board.winner === false ?
                (<span>{self.board.xIsNext ? 'X' : 'O'}'s turn</span>)
                : (self.board.winner === 'T' ?
                  (<span>It's a tie!</span>) :
                  (<span className="board-status-winner">{self.board.winner} wins!</span>)
                )
            }
          </span>
        </div>
        <div className="board-tiles">
          {this.props.board.tiles.map((row, rowIndex) => <BoardRow key={ rowIndex } row={ row }
            boardIndex={ self.i } rowIndex={ rowIndex } nextTurn={ self.nextTurn }
          />)}
        </div>
      </div>
    );
  }
}

class BoardRow extends Component {
  render() {
    return (
      <div className="board-row">
        { this.props.row.map((square, column) => <div className={'square ' + 'square-col-'+column + ' square-row-' + this.props.rowIndex } key={ column } onClick={ this.props.nextTurn.bind(null,this.props.boardIndex,[this.props.rowIndex, column]) }><div className="square-text">{square}</div></div>)}
      </div>
    );
  }
}

export default Board;
