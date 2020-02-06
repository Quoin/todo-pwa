import { PUBLIC_PATH } from './../../constants';

import content from './../ssr/content';

export default async (req, res) => {
    try {
        const html = content(`${PUBLIC_PATH}/`, req.url);
        res.status(404).type('text/html').send(html);
    } catch (err) {
        res.status(500).type('text/plain').send(err.toString());
    }
};
