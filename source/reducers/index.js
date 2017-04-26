import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import boards from './boards';

const rootReducer = combineReducers({ boards, routing: routerReducer });

export default rootReducer;
