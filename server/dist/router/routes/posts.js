'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('../../services/posts');

var postsService = _interopRequireWildcard(_posts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 * @api {get} /posts pagination
 * @apiDescription Shows paginated messages
 * @apiName Post
 * @apiGroup Post
 *
 * @apiParam {String} skip posts
 * @apiParam {String} limit number of posts
 */
router.get('/posts', function (req, res) {
    var protocol = req.protocol;

    var host = req.get('host');
    var skip = Number(req.query.skip) >= 0 && Number(req.query.skip) || 0;
    var limit = Number(req.query.limit) >= 0 && Number(req.query.limit) || 10;
    postsService.getPaginatedPosts({ skip: skip, limit: limit }).then(function (posts) {
        return res.json({
            success: true,
            posts: posts,
            next: protocol + '://' + host + '/posts?skip=' + (skip + limit) + '&limit=' + limit,
            previous: protocol + '://' + host + '/posts?skip=' + (skip - limit >= 0 ? skip - limit : 0) + '&limit=' + limit
        });
    }).catch(function (err) {
        return res.json({
            success: false,
            err: err
        });
    });
});

/**
 * @api {post} /posts Create
 * @apiDescription create a message
 * @apiName Post creation
 * @apiGroup Post
 *
 * @apiParam {String} text message
 */
router.post('/posts', function (req, res) {
    var text = req.body.text;


    if (!text || !text.trim()) {
        return res.json({
            success: false,
            exception: 'no text provided'
        });
    }

    postsService.insertPost({
        author: 'zac',
        text: text,
        createdAt: Date.now()
    }).then(function (data) {
        return res.json({
            success: true,
            created: data
        });
    }).catch(function (err) {
        return res.json({
            success: false,
            err: err
        });
    });
});

exports.default = router;