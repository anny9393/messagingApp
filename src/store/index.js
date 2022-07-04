import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { compose } from 'recompose';
import updatedMessages from './updatedMessage';
// import robotAnswer from './robotAnswer';

// const  logger = ({getState}) => next => action => {
//       console.log ('prevState:', getState());
//       console.log('action', action);
//       const result = next(action);
//       console.log('nextState', getState())
//       return result;
// }
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(updatedMessages, thunk,logger));


// const store = createStore(rootReducer, enhancer);

export default () => {
  const  store = createStore(rootReducer, enhancer)
  return { store }
};

