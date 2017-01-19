'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var os = require('os');
var env = process.env;

var gen = exports.gen = function gen() {
    return [{
        name: 'Node.js Version',
        value: process.version.replace('v', '')
    }, {
        name: 'OS Type',
        value: os.type()
    }, {
        name: 'OS Platform',
        value: os.platform()
    }, {
        name: 'OS Architecture',
        value: os.arch()
    }, {
        name: 'OS Release',
        value: os.release()
    }, {
        name: 'CPU Cores',
        value: os.cpus().length
    }, {
        name: 'Gear Memory',
        value: env.OPENSHIFT_GEAR_MEMORY_MB + 'MB'
    }, {
        name: 'NODE_ENV',
        value: env.NODE_ENV
    }];
};

var poll = exports.poll = function poll() {
    return [{
        name: 'Free Memory',
        value: Math.round(os.freemem() / 1048576) + 'MB'
    }, {
        name: 'Uptime',
        value: os.uptime() + 's'
    }];
};