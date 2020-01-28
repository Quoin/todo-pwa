import {
    actionCreator,
    concatenateReducers,
    getSubstateAttribute,
    namespacedActions,
    setSubstateAttribute
} from '@quoin/react-utils';

import { ATTRIBUTES } from './constants';
import namespace from './namespace';

const actions = namespacedActions(namespace, [
    'SET'
]);

const actionCreators = Object.freeze({
    set: (counter) => actionCreator(actions.SET, { counter })
});

export const orchestrators = Object.freeze({
    click: (dispatch, counter) => dispatch(actionCreators.set(counter))
});

export const reducers = concatenateReducers([{
    actions: [ actions.SET ],
    reducer: (state, action) => setSubstateAttribute(state, namespace, ATTRIBUTES.COUNTER, action.payload.counter)
}]);

export const selectors = Object.freeze({
    counter: (state) => getSubstateAttribute(state, namespace, ATTRIBUTES.COUNTER)
});
