import {
    errorBoundary,
    React,
    Route,
    RoutesInfo,
    Switch,
    useRouteMatch
} from '@quoin/react-utils';

import Topic from './../topic';

const Component = (props) => {
    const match = useRouteMatch();

    return (
        <>
            <div>We are in a Topic...</div>
            <Switch>
                <Route path={RoutesInfo.path('topic')}>
                    <div>Topic with ID</div>
                    <Topic />
                </Route>
                <Route path={RoutesInfo.path('topics')}>
                    <div>Topics without ID</div>
                </Route>
            </Switch>
        </>
    );
};

export default errorBoundary(Component);
