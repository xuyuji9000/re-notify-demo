import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'

import reducers from './reducers'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware, thunk)
)

sagaMiddleware.run(rootSaga)

export default store;
