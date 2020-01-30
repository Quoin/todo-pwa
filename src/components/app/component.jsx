import React from 'react';

import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

import { NAME } from './constants';

const Component = (props) => {
    return (
        <div className="TodoSsrApp">
            <div>Times clicked: {props.counter}</div>
            <div><a onClick={() => props.click()}>one more</a></div>
            <div>This came from outside the component: {props.fromParent}</div>
        </div>
    );
};

Component.displayName = NAME;

Component.propTypes = {
    click: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};

Component.defaultProps = {
    counter: 0
};

export default errorBoundary(Component);
