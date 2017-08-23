import fetch from 'isomorphic-fetch'

export const RETRIEVE_SUBREDDIT = 'RETRIEVE_SUBREDDIT';
export const RETRIEVED_SUBREDDIT = 'RETRIEVED_SUBREDDIT';

export const initialState = {
    loading: false,
    subreddit: null
};

export function forgeRetrieveSubreddit(name) {
    return {
        type: RETRIEVE_SUBREDDIT,
        name
    };
}

export function forgeRetrievedSubreddit(json) {
    return {
        type: RETRIEVED_SUBREDDIT,
        subreddit: {
            posts: json.data.children.map(child => {
                return {title: child.data.title, domain: child.data.domain}
            })
        }
    }
}

export function fetchSubreddit(subreddit) {
    return function(dispatch) {
        dispatch(forgeRetrieveSubreddit(subreddit));
        fetch('https://www.reddit.com/r/' + subreddit + '.json')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json => {
                setTimeout(() => {
                    dispatch(forgeRetrievedSubreddit(json));
                }, 1000);
            });
    }
}