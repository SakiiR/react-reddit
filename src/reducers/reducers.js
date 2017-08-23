/**
 * Created by edupard on 23/08/2017.
 */

import { initialState, RETRIEVED_SUBREDDIT, RETRIEVE_SUBREDDIT } from '../actions/AsyncSubreddits';
import { combineReducers } from 'redux'

export function retrieveSubreddit(state) {
    return Object.assign({}, state, {
        loading: true,
        subreddit: null,
    });
}

export function retrievedSubreddit(state, subreddit) {
    return Object.assign({}, state, {
        loading: false,
        subreddit: subreddit
    });
}

export function dispatchAction(previousState = initialState, action) {
    switch (action.type) {
        case RETRIEVE_SUBREDDIT:
            return retrieveSubreddit(previousState);
        case RETRIEVED_SUBREDDIT:
            return retrievedSubreddit(previousState, action.subreddit);
        default:
            return previousState;
    }
}

const rootReducer = combineReducers({
    dispatchAction
});

export default rootReducer;