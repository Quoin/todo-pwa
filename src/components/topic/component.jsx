import {
    errorBoundary,
    React,
    useParams,
    useRouteMatch
} from '@quoin/react-utils';

const Component = (props) => {
    const params = useParams();
    console.log("Topic: params=", params);

    return (
        <div>We are in a single top and the ID is <b>{params.topicId}</b>.</div>
    );
};

export default errorBoundary(Component);
