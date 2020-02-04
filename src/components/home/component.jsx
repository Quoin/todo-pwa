import {
    errorBoundary,
    React
} from '@quoin/react-utils';

const Component = (props) => {
    return (
        <div>This is the home page</div>
    );
};

export default errorBoundary(Component);
