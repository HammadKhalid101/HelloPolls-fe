import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/index.scss';
// import {store, persistor} from './redux/store/store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter } from "react-router-dom";
import { createStore } from 'redux'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './redux/reducers/rootReducer';

// Store with persistor
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
)
let persistor = persistStore(store)
//


const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore()


// Testing 
window.getState = store.getState;
window.dispatch = store.dispatch;
// Testing 


root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
