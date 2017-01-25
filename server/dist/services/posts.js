'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertPost = exports.getPaginatedPosts = undefined;

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var r = require('rethinkdbdash')(_config2.default.rethinkdb);

var postsTable = 'posts';

var getPaginatedPosts = exports.getPaginatedPosts = function getPaginatedPosts(_ref) {
    var skip = _ref.skip,
        limit = _ref.limit;
    return new Promise(function (resolve, reject) {
        return r.table(postsTable).orderBy('createdAt').slice(skip, skip + limit).then(resolve).catch(reject);
    });
};

/**
 * Inserts a new post
 * @param author id of the author
 * @param text of the message
 * @param createdAt Date.now()
 */
var insertPost = exports.insertPost = function insertPost(_ref2) {
    var author = _ref2.author,
        text = _ref2.text,
        createdAt = _ref2.createdAt;
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