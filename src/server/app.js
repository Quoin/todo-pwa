import express from 'express';
import 'regenerator-runtime';

import ssr from './ssr';

export default () => {
    const app = express();

    app.get('*', ssr);

    return app;
};
