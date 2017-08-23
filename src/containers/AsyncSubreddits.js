import Subreddits from '../components/Subreddits/Subreddits';
import { fetchSubreddit } from '../actions/AsyncSubreddits';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        loading: state.dispatchAction.loading,
        subreddit: state.dispatchAction.subreddit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (subreddit) => {
            dispatch(fetchSubreddit(subreddit));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Subreddits);