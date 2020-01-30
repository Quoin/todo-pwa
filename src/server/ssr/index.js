import { fromJS } from 'immutable';

import {
    createStore,
    Provider,
    React,
    ssrWithStore
} from '@quoin/react-utils';

import { default as App, reducers } from './../../components';
import { PUBLIC_PATH } from './../../constants';
import { default as middlewares } from './../../middlewares';

import _debug from './debug'; const debug = _debug('index');

export default async (req, res) => {
    debug(`calling(): req.path=`, req.path);
    try {
        const initialState = fromJS({
            something: '<html bad><div>a</div></html>'
        });

        const store = createStore(reducers, initialState, middlewares, process.env.NODE_ENV === 'development');
        // store.dispatch() any actions needed to get the desired state.

        const page = {
            title: "Put your page title here",
            assets: [
                // JS and CSS
                `${PUBLIC_PATH}/js/react.js`,
                `${PUBLIC_PATH}/js/react-dom.js`,
                `${PUBLIC_PATH}/js/redux.js`,
                `${PUBLIC_PATH}/app.min.js`
            ]
        };

        const html = ssrWithStore(App, store, page);

        debug(`html=`, html);

        res
            .status(200)
            .type('text/html')
            .send(html);
    } catch (err) {
        debug(`*** ERROR: ***`, err);
        res.status(500).type('text/plain').send(err.toString());
    }
};
