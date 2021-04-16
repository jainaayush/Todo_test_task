import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Components/Reducer'

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;