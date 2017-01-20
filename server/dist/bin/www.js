#!/usr/bin/env node

'use strict';
/**
 * Module dependencies.
 */

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _rethinkDb = require('./rethinkDb');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.port || '8081');

(0, _rethinkDb.dbInit)().then(runServer).catch(onError);

function runServer() {
    _app2.default.set('port', port);

    /**
     * Create HTTP server.
     */

    var server = _http2.default.createServer(_app2.default);

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
    var port = parseInt(val, 10);

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

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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