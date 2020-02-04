import { fromJS } from 'immutable';

import {
    createStore,
    ssrWithStore
} from '@quoin/react-utils';

import { default as App, reducers } from './../../components';
import { default as middlewares } from './../../middlewares';

// import _debug from './debug'; const debug = _debug('content');

export default (rootPath='') => {
    const initialState = fromJS({
        something: '<html bad><div>a</div></html>'
    });

    const store = createStore(reducers, initialState, middlewares, process.env.NODE_ENV === 'development');
    // store.dispatch() any actions needed to get the desired state.

    const page = {
        title: "Put your page title here",
        assets: [
            // JS and CSS
            `${rootPath}js/react.js`,
            `${rootPath}js/react-dom.js`,
            `${rootPath}js/redux.js`,
            `${rootPath}app.min.js`
        ]
    };

    const html = ssrWithStore(App, store, page);

    return html;
};
