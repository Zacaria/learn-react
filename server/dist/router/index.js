'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

var _root = require('../services/root');

var rootService = _interopRequireWildcard(_root);

var _exceptions = require('../constants/exceptions');

var exceptions = _interopRequireWildcard(_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _express2.default.Router();


/**
 * @api {get} / Flagz Root
 * @apiName Root
 * @apiDescription The rocking flagz api
 * @apiGroup API
 */
app.get('/', function (req, res) {
    var protocol = req.protocol;

    var host = req.get('host');
    res.json({
        success: true,
        infos: rootService.websiteRoot({ protocol: protocol, host: host })
    });
});

app.use('/posts', _posts2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error(exceptions.PATH_NOT_FOUND);
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

exports.default = app;