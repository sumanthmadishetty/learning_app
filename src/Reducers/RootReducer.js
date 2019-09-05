import { combineReducers, createStore, applyMiddleware } from 'redux'
import FormReducer from '../ReduxExample/FormReducer';
import CounterReducer from '../Counter/CounterReducer';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import Reducer from '../SagaExample/Reducer';
import action from '../SagaExample/Home';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const RootReducer = combineReducers({
  FormReducer,
  CounterReducer, Reducer
})
export function configureStore() {
  const Store = createStore(
    RootReducer,
    applyMiddleware(thunk, sagaMiddleware, logger)
  );
  sagaMiddleware.run(action);
  return Store;
}

  // export function configureStore() {
  //   return createStore(RootReducer, applyMiddleware(thunk,sagaMiddleware, logger) );
  // } 
  //   sagaMiddleware.run(rootSaga);

