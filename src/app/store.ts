import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers/rootReducer';

const logger = createLogger({
  duration: true
});

export type StoreParams = {
  initialState?: { [key: string]: any };
  middleware?: any[];
};

const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
  const composeEnhancers = compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...[thunk].concat(...middleware), logger))
  );

  return store;
};

export default configureStore;
