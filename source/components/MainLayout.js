import React, { Component } from 'react';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1 className="site-title">ReduxTacToe</h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default MainLayout;
