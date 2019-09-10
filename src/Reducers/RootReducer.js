import { combineReducers, createStore, applyMiddleware } from 'redux'
import FormReducer from '../Reducers/FormReducer';
import CounterReducer from '../Reducers/CounterReducer';
import DateReducer from '../Reducers/DateReducer';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import Reducer from '../Reducers/QuotesReducer';
import action from '../Components/SagaExample/Home';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const RootReducer = combineReducers({
  FormReducer,
  CounterReducer, Reducer, DateReducer
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

