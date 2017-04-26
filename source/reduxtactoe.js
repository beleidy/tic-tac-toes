// Import React and React-Dom
import React from 'react';
import { render } from 'react-dom';

// Import react-router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Import Components
import App from './components/app';
import BoardGrid from './components/BoardGrid';

// Import CSS
import './styles/Main.css';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ BoardGrid } />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
