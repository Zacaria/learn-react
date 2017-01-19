'use strict';

const os = require('os');
const env = process.env;

export const gen = () => ([{
        name: 'Node.js Version',
        value: process.version.replace('v', '')
    }, {
        name:  'OS Type',
        value: os.type()
    }, {
        name:  'OS Platform',
        value: os.platform()
    }, {
        name:  'OS Architecture',
        value: os.arch()
    }, {
        name:  'OS Release',
        value: os.release()
    }, {
        name:  'CPU Cores',
        value: os.cpus().length
    }, {
        name:  'Gear Memory',
        value: `${env.OPENSHIFT_GEAR_MEMORY_MB}MB`
    }, {
        name:  'NODE_ENV',
        value: env.NODE_ENV
    }]);

export const poll= () => ([{
    name: 'Free Memory',
    value: `${Math.round(os.freemem() / 1048576)}MB`
}, {
    name: 'Uptime',
    value: `${os.uptime()}s`
}]);