'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.websiteRoot = undefined;

var _package = require('../../../package.json');

var _package2 = _interopRequireDefault(_package);

var _infos = require('../constants/infos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var websiteRoot = exports.websiteRoot = function websiteRoot(_ref) {
    var protocol = _ref.protocol,
        host = _ref.host;
    return {
        message: _infos.WELCOME,
        version: _package2.default.version,
        doc: protocol + '://' + host + '/doc',
        signup: protocol + '://' + host + '/signup',
        signin: protocol + '://' + host + '/signin',
        users: protocol + '://' + host + '/users',
        posts: protocol + '://' + host + '/posts'
    };
};