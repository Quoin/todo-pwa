import {
    errorBoundary,
    Link,
    PropTypes,
    React,
    Route,
    RoutesInfo,
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
                <li>Home page: <Link to={RoutesInfo.to('home')}>Home</Link></li>
                <li>
                    Topics:
                    {' '}
                    <Link to={RoutesInfo.to('topics')}>Without ID</Link>
                    {' '}
                    and
                    {' '}
                    <Link to={RoutesInfo.to('topic', { topicId: 123})}>With ID</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path={RoutesInfo.path('topics')}>
                    <div>We should render Topics below</div>
                    <Topics />
                </Route>
                <Route path={RoutesInfo.path('home')}>
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
