import express from 'express';
const router = express.Router();
import * as postsService from '../../services/posts';


router.get('/:skip&:limit', (req, res) => {
    const {skip, limit} = req.params;
    postsService.getPaginatedPosts({skip, limit})
        .then((posts) =>
            res.json({
                success: true,
                posts
            }))
        .catch((err) =>
            res.json({
                success: false,
                err
            }));
});

/**
 * Without pagination it's easier to practice
 * So I let this as is
 * @api {get} /posts Show all
 * @apiDescription Shows all messages
 * @apiName Post
 * @apiGroup Post
 */
router.get('/', (req, res) => {
    postsService.getPosts()
        .then((posts) =>
            res.json({
                success: true,
                posts
            }))
        .catch((err) =>
            res.json({
                success: false,
                err
            }));

});

/**
 * @api {post} /posts Create
 * @apiDescription create a message
 * @apiName Post creation
 * @apiGroup Post
 *
 * @apiParam {String} text message
 */
router.post('/', (req, res) => {
    const {text} = req.body;

    if(!text || !text.trim()) {
        return res.json({
            success: false,
            exception: 'no text provided'
        })
    }

    postsService.insertPost({
        author: 'zac',
        text,
        createdAt: Date.now()
    })
        .then((data) =>
            res.json({
                success: true,
                created: data
            }))
        .catch((err) =>
            res.json({
                success: false,
                err
            }));


});

export default router;