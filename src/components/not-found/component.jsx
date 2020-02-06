import {
    errorBoundary,
    React
} from '@quoin/react-utils';

import { useLocation } from 'react-router-dom';

const Component = (props) => {
    const location = useLocation();
    console.log("location=", location);

    return (
        <>
            <h1>Page Not Found</h1>
            <h2>URL: {location.pathname}</h2>
        </>
    );
};

export default errorBoundary(Component);
