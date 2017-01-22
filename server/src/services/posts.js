import config from 'config';
const r = require('rethinkdbdash')(config.rethinkdb);

const postsTable = 'posts';

export const getPosts = () =>
    new Promise((resolve, reject) =>
        r.table(postsTable)
            .then(resolve)
            .catch(reject)
    );

export const getPaginatedPosts = ({skip=0, limit=10}) =>
    new Promise((resolve, reject) =>
        r.table(postsTable)
            .orderBy('createdAt')
            .slice(Number(skip), Number(skip)+Number(limit))
            .then(resolve)
            .catch(reject)
    );

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