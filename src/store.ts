import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

const initialState = {
  language: 'en',
  counter: 0
};

const setupStore = () => createStore(rootReducer, initialState, applyMiddleware(thunk));

export default setupStore;
