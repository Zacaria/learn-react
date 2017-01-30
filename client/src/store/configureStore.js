import {createStore, applyMiddleware} from 'redux';
import chatApp from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(chatApp, applyMiddleware(...middlewares));
};

export default configureStore;