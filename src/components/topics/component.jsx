import {
    errorBoundary,
    React,
    Route,
    Switch,
    useRouteMatch
} from '@quoin/react-utils';

import Topic from './../topic';

const Component = (props) => {
    const match = useRouteMatch();

    console.log("Topics: match=", match);

    return (
        <>
            <div>We are in a Topic...</div>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <div>Topic with ID</div>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <div>Topics without ID</div>
                </Route>
            </Switch>
        </>
    );
};

export default errorBoundary(Component);
