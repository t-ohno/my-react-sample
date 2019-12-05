import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

export type StoreParams = {
  initialState?: { [key: string]: any };
  middleware?: any[];
};

const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
  const composeEnhancers = compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))
  );

  return store;
};

export default configureStore;
