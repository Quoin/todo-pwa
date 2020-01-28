import {
    boundComponent,
    PropTypes,
    useDispatch,
    useSelector
} from '@quoin/react-utils';

import Component from './component';
import { orchestrators, selectors } from './flux';

const getComponentProps = (props) => {
    const dispatch = useDispatch();

    const counter = useSelector(selectors.counter);

    return {
        ...props,
        counter,
        click: () => orchestrators.click(dispatch, counter + 1)
    };
};

const propTypes = {
    fromParent: PropTypes.string,
};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propTypes, defaultProps);
