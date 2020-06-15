import { createStore, combineReducers } from 'redux';
import portfolioReducer from '../reducers/portfolio' 
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
        portfolio: portfolioReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
