import {
    errorBoundary,
    Link,
    PropTypes,
    React,
    Route,
    Switch
} from '@quoin/react-utils';

import Home from './../home';
import Topics from './../topics';

import { NAME } from './constants';

const Component = (props) => {
    return (
        <div className="TodoSsrApp">
            <div>Times clicked: {props.counter}</div>
            <div><span onClick={() => props.click()}>one more</span></div>
            <hr />
            <ul>
                <li>Home page: <Link to="/">Home</Link></li>
                <li>Topics: <Link to="/topics">Without ID</Link> and <Link to="/topics/123">With ID</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path="/topics">
                    <div>We should render Topics below</div>
                    <Topics />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
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
