import {applyMiddleware, createStore} from 'redux';

import RootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './saga';

const sagamiddleware = createSagaMiddleware();
const store = createStore(RootReducer, {}, applyMiddleware(sagamiddleware));

sagamiddleware.run(rootsaga);

export default store;
