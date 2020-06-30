import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(logger(), thunk, promise());

export default createStore(reducers, middleware);