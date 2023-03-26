import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { initialState } from '../reducers';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';

// all middlewares here, pay attention to order, that's important
const middlewares = [thunk];

const store = createStore(
    rootReducer,
    // add an initial state, composed of all the reducers
    initialState,
    // add only devTools on local machine, but could be great to have them on production (therefore use composeWithDevTools)
    composeWithDevToolsDevelopmentOnly(applyMiddleware(...middlewares))
);

export default store;
