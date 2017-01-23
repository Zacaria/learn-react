import express from 'express';
const app = express.Router();
import postsRoutes from './routes/posts';
import * as rootService from '../services/root';
import * as exceptions from '../constants/exceptions';

/**
 * @api {get} / Flagz Root
 * @apiName Root
 * @apiDescription The rocking flagz api
 * @apiGroup API
 */
app.get('/', (req, res) => {
    const {protocol} = req;
    const host = req.get('host');
    res.json({
        success: true,
        infos: rootService.websiteRoot({protocol, host})
    });
});

app.use('/', postsRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err  = new Error(exceptions.PATH_NOT_FOUND);
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error  : err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error  : {}
    });
});

export default app;