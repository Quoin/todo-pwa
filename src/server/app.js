import express from 'express';
import path from 'path';
import 'regenerator-runtime';

import { PUBLIC_FOLDER, PUBLIC_PATH } from './../constants';

import ssr from './ssr';

export default () => {
    const app = express();

    app.use(PUBLIC_PATH, express.static(PUBLIC_FOLDER));

    app.get('/favicon.ico', (req, res) => res.status(404).send().end());

    app.get('*', ssr);

    return app;
};
