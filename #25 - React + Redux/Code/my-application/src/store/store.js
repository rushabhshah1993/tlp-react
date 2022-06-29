import { 
    createStore, combineReducers,
    applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

import toDoReducer from './../reducers/toDoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        toDo: toDoReducer
    }),
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
