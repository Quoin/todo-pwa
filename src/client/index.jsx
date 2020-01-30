import {
    hydrateWithStore
} from '@quoin/react-utils';

import { default as App, reducers } from './../components';
import { default as middlewares } from './../middlewares';

hydrateWithStore(App, reducers, middlewares, process.env.NODE_ENV === 'development');
