import config from 'config';
const r = require('rethinkdbdash')();

const init = () =>
    new Promise((resolve, reject) => {
        r.dbList()
            .contains(config.rethinkdb.db)
            .do((containsDb) =>
                // Creates db if it does not exist
                r.branch(containsDb, {created: 0}, r.dbCreate(config.rethinkdb.db))
            )
            .run()
            .then(resolve)
            .catch(reject);
    });

export default init;
