// Import Project Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS/SCSS
import './css/application.scss';

// Import Container / Components for Routing
import ApplicationLayout from './js/components/ApplicationLayout';
import Welcome from './js/components/Welcome';

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ApplicationLayout}>
        <IndexRoute component={Welcome} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
