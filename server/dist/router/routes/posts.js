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
 * Without pagination it's easier to practice
 * So I let this as is
 */
router.get('/', function (req, res) {
    postsService.getPosts().then(function (posts) {
        return res.json({
            success: true,
            posts: posts
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
 * @apiPermission Authentified
 *
 * @apiParam {String} text message
 */
router.post('/', function (req, res) {
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