import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import MainLayout from './MainLayout';

// Pass the state.board to the props of the connected component
function mapStateToProps(state) {
  return {
    boards: state.boards,
  };
}

// Pass all action creators to the MainLayout component
function mapDispatchToProps(dispatch) {
  // Bind the action creators to dispatch to automatically dispatch
  // any actions once they are created
  return bindActionCreators(actionCreators, dispatch);
}

// Connect the MainLayout component to the state and dispatch defined above
const App = connect(mapStateToProps, mapDispatchToProps)(MainLayout);

export default App;
