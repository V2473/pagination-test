import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import sagaWatcher from './saga/sagas';
import rootReducer from './redux/reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);
