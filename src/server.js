import app from './server/app';

import _debug from './debug'; const debug = _debug('server');

const server = app();

const port = process.env.PORT || 8080;
server.listen(port, () => {
    debug(`Server started on port: ${port}.`);
});
