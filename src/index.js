import api from './api/api'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import  configureStore from './store/configureStore'


const store = configureStore()

const symbolFetch = async () => {
  if (!window.localStorage.getItem('symbols')){
    const symbols = await api.symbolSearch()
    const parsed = JSON.stringify(symbols.data)
    window.localStorage.setItem('symbols',parsed)
  }
}

symbolFetch()



ReactDOM.render(
  <Provider
  store={store}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
