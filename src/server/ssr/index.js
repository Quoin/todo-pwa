import { PUBLIC_PATH } from './../../constants';

import content from './content';

import _debug from './debug'; const debug = _debug('index');

export default async (req, res) => {
    debug(`XF:${req.headers['x-forwareded-for']}||IP:${req.connection.remoteAddress}: calling(): req.path=`, req.path);
    try {
        const html = content(`${PUBLIC_PATH}/`, req.url);

        res
            .status(200)
            .type('text/html')
            .send(html);
    } catch (err) {
        debug(`*** ERROR: ***`, err);
        res.status(500).type('text/plain').send(err.toString());
    }
};
