import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer, { reduxInitialState } from './reducer';

const initializeStore = (initialState = reduxInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware),
    ),
  );
};

export default initializeStore;
