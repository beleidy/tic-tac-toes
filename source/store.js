import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// Import the default boards
import boards from './data/initialBoards';

// Create an object for default data
const defaultState = {
  boards,
};

// Create the store where all global state will sit, and pass it a default state
const store = createStore(rootReducer, defaultState);

// Sync the browser history with the store and export it to be used by react-router
export const history = syncHistoryWithStore(browserHistory, store);

// Export the store to be used when connecting components
export default store;
