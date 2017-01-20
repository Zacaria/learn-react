import config from 'config';
const r = require('rethinkdbdash')(config.rethinkdb);

/**
 * Creates db if it does not exist
 * Uses env param to know which db to use
 */
const createDbIfMissing = (dbName) =>
    new Promise((resolve, reject) => {
        r.dbList()
            .contains(dbName)
            .do((containsDb) => r.branch(containsDb, {created: 0}, r.dbCreate(dbName)))
            .run()
            .then(resolve)
            .catch(reject);
    });

/**
 * Creates tables if they do not exist
 */
const createTables = (tables) =>
    Promise.all(tables
        .map((table) =>
            new Promise((resolve, reject) => {
                r.tableList()
                    .contains(table)
                    .do((containsTable) => r.branch(containsTable, {created: 0}, r.tableCreate(table)))
                    .run()
                    .then(resolve)
                    .catch(reject);
            })
        )
    );


/**
 * Init rethinkDb database
 */
const init = () =>
    new Promise((resolve, reject) => {
        createDbIfMissing(config.rethinkdb.db)
            .then(() => createTables(config.rethinkdb.tables))
            .then(resolve)
            .catch(reject);
    });

export default init;
