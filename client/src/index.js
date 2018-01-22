import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import indexRoutes from './routes/index.jsx';

import registerServiceWorker from './registerServiceWorker';

import './assets/css/bootstrap.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {
          indexRoutes.map((prop,key) => {
            return (
              <Route path={prop.path} component={prop.component}  key={key}/>
            );
          })
        }
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
