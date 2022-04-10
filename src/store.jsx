import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import rootReducers from './components/reducers'

const initialState = {}
const   store = createStore(
    rootReducers,   
    initialState,
     compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
     )
export default store;
