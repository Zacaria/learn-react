'use strict';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import router from './router';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use('/doc', express.static(path.join(__dirname + '/../doc')));
app.use('/', router);

export default app;
