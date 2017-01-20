import config from 'config';
const r = require('rethinkdbdash')(config.rethinkdb);

const postsTable = 'posts';

/**
 * Inserts a new post
 * @param author id of the author
 * @param text of the message
 * @param createdAt Date.now()
 */
export const insertPost = ({author, text, createdAt}) =>
    new Promise((resolve, reject) =>
        r.table(postsTable)
            .insert({
                author,
                text,
                createdAt
            }, {returnChanges: true})
            .run()
            .then((result) => resolve(result.changes))
            .catch(reject)
    );