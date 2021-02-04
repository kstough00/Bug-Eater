import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import bugsReducer from './reducers/bugsReducer';
import thunk from 'redux-thunk'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    bugs: bugsReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
