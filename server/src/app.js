'use strict';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import http from 'http';
const socketIo = require('socket.io');

import { dbInit } from './bin/rethinkDb';
import router from './router';
import { register } from './sockets';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use('/doc', express.static(path.join(__dirname + '/../doc')));
app.use('/', router);

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.port || '8081');

dbInit()
  .then(runServer)
  .catch(onError);

function runServer() {
  app.set('port', port);

  /**
   * Create HTTP server.
   */

  const server = http.createServer(app);
  const io = socketIo(server);
  register(io);

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port, 'localhost');
  server.on('error', onError);
  server.on('listening', onListening);
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log('Listening on ' + port);
}
