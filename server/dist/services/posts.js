'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertPost = exports.getPosts = undefined;

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var r = require('rethinkdbdash')(_config2.default.rethinkdb);

var postsTable = 'posts';

var getPosts = exports.getPosts = function getPosts() {
    return new Promise(function (resolve, reject) {
        return r.table(postsTable).then(resolve).catch(reject);
    });
};

/**
 * Inserts a new post
 * @param author id of the author
 * @param text of the message
 * @param createdAt Date.now()
 */
var insertPost = exports.insertPost = function insertPost(_ref) {
    var author = _ref.author,
        text = _ref.text,
        createdAt = _ref.createdAt;
    return new Promise(function (resolve, reject) {
        return r.table(postsTable).insert({
            author: author,
            text: text,
            createdAt: createdAt
        }, { returnChanges: true }).run().then(function (result) {
            return resolve(result.changes);
        }).catch(reject);
    });
};