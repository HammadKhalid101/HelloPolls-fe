// import { createStore } from 'redux'
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import rootReducer from '../reducers/rootReducer';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(
//         persistedReducer,
//         applyMiddleware(thunk, logger)
//     )
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

// export default configureStore = (preloadedState = {}) => {
//     let store = createStore(
//         persistedReducer,
//         preloadedState,
//         applyMiddleware(thunk, logger)
//         )
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }

// const configureStore = (preloadedState = {}) => {
//     return createStore(
//         rootReducer, 
//         preloadedState, 
//         applyMiddleware(thunk, logger),
//     )
// }

// export default configureStore;