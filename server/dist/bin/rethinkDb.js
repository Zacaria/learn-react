'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dbDestroy = exports.dbInit = undefined;

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var r = require('rethinkdbdash')(_config2.default.rethinkdb);

/**
 * Creates db if it does not exist
 * Uses env param to know which db to use
 */
var createDbIfMissing = function createDbIfMissing(dbName) {
    return new Promise(function (resolve, reject) {
        r.dbList().contains(dbName).do(function (containsDb) {
            return r.branch(containsDb, { created: 0 }, r.dbCreate(dbName));
        }).run().then(resolve).catch(reject);
    });
};

/**
 * Creates tables if they do not exist
 */
var createTables = function createTables(tables) {
    return Promise.all(tables.map(function (table) {
        return new Promise(function (resolve, reject) {
            r.tableList().contains(table).do(function (containsTable) {
                return r.branch(containsTable, { created: 0 }, r.tableCreate(table));
            }).run().then(resolve).catch(reject);
        });
    }));
};

/**
 * Drop db for testing purpose
 * @param dbName
 */
var dropDb = function dropDb(dbName) {
    return new Promise(function (resolve, reject) {
        return r.dbDrop(dbName).then(resolve).catch(reject);
    });
};

/**
 * Init rethinkDb database
 */
var dbInit = exports.dbInit = function dbInit() {
    return new Promise(function (resolve, reject) {
        createDbIfMissing(_config2.default.rethinkdb.db).then(function () {
            return createTables(_config2.default.rethinkdb.tables);
        }).then(resolve).catch(reject);
    });
};

var dbDestroy = exports.dbDestroy = function dbDestroy() {
    return new Promise(function (resolve, reject) {
        dropDb(_config2.default.rethinkdb.db).then(resolve).catch(reject);
    });
};