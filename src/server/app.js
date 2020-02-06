import express from 'express';
import path from 'path';
import 'regenerator-runtime';

import {
    RoutesInfo
} from '@quoin/react-utils';

import { PUBLIC_FOLDER, PUBLIC_PATH, ROUTES_INFO } from './../constants';

import ssr from './ssr';
import ssr404 from './ssr-404';

export default () => {
    const app = express();

    app.use(PUBLIC_PATH, express.static(PUBLIC_FOLDER));

    app.get('/favicon.ico', (req, res) => res.status(404).send().end());

    RoutesInfo.configure(ROUTES_INFO);
    RoutesInfo.register(app, ssr);

    app.get('*', ssr404);

    return app;
};
