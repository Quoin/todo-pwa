import {
    hydrateWithStore,
    RoutesInfo
} from '@quoin/react-utils';

import { ROUTES_INFO } from './../constants';
import { default as App, reducers } from './../components';
import { default as middlewares } from './../middlewares';

RoutesInfo.configure(ROUTES_INFO);
hydrateWithStore(App, reducers, middlewares, process.env.NODE_ENV === 'development');
