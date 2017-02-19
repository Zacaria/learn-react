import { createStore, applyMiddleware } from 'redux';
import chatApp from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createSocketIoMiddleware from 'redux-socket.io';

const socket = require('socket.io-client')('http://localhost:8081');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'post/');

require('../sockets').register(socket);

const configureStore = () => {
  const middlewares = [thunk, socketIoMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(chatApp, applyMiddleware(...middlewares));
};

export default configureStore;
