'use strict';

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numCPUs = _os2.default.cpus().length;
var stopSignals = ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'];
var production = process.env.NODE_ENV == 'production';

var stopping = false;

_cluster2.default.on('disconnect', function (worker) {
    if (production) {
        if (!stopping) {
            _cluster2.default.fork();
        }
    } else {
        process.exit(1);
    }
});

if (_cluster2.default.isMaster) {
    var workerCount = process.env.NODE_CLUSTER_WORKERS || numCPUs;
    console.log('Starting ' + workerCount + ' workers...');
    for (var i = 0; i < workerCount; i++) {
        _cluster2.default.fork();
    }
    if (production) {
        stopSignals.forEach(function (signal) {
            process.on(signal, function () {
                console.log('Got ' + signal + ', stopping workers...');
                stopping = true;
                _cluster2.default.disconnect(function () {
                    console.log('All workers stopped, exiting.');
                    process.exit(0);
                });
            });
        });
    }
} else {
    require('./www');
}