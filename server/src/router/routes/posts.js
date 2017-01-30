import express from 'express';
const router = express.Router();
import * as postsService from '../../services/posts';

/**
 * @api {get} /posts pagination
 * @apiDescription Shows paginated messages
 * @apiName Post
 * @apiGroup Post
 *
 * @apiParam {String} skip posts
 * @apiParam {String} limit number of posts
 */
router.get('/posts', (req, res) => {
  const { protocol } = req;
  const host = req.get('host');
  const skip = Number(req.query.skip) >= 0 && Number(req.query.skip) || 0;
  const limit = Number(req.query.limit) >= 0 && Number(req.query.limit) || 10;
  postsService.getPaginatedPosts({ skip, limit })
    .then((posts) =>
      res.json({
        success: true,
        posts,
        next: `${protocol}://${host}/posts?skip=${skip + limit}&limit=${limit}`,
        previous: `${protocol}://${host}/posts?` +
                  `skip=${skip - limit >= 0 ? skip - limit : 0}&limit=${limit}`,
      }))
    .catch((err) =>
      res.json({
        success: false,
        err,
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
router.post('/posts', (req, res) => {
  const { text } = req.body;

  if (!text || !text.trim()) {
    return res.json({
      success: false,
      exception: 'no text provided',
    });
  }

  postsService.insertPost({
    author: 'zac',
    text,
    createdAt: Date.now(),
  })
    .then((data) =>
      res.json({
        success: true,
        created: data,
      }))
    .catch((err) =>
      res.json({
        success: false,
        err,
      }));
});

export default router;
