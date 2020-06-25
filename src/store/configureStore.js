import { createStore, combineReducers, getState } from 'redux';
import portfolioReducer from '../reducers/portfolio' 


export default () => {
  const store = createStore(
    combineReducers({
        portfolio: portfolioReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};


