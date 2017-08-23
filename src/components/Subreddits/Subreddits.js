import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import logo from '../../logo.svg';
import Divider from 'material-ui/Divider';
import SubredditsList from '../SubredditsList/SubredditsList';
import Subreddit from '../Subreddit/Subreddit';
import { subreddits } from '../Consts/Consts';
import '../App/App.css';

class Subreddits extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className={this.props.loading ? "App-logo fast" : "App-logo"} alt="logo" />
                    <h2>Welcomes to the subreddits list</h2>
                </div>
                <div className="App-intro">
                    <Card>
                        <CardHeader
                            title="Subreddits List"
                            subtitle="Choose a subreddits"
                        />
                        <CardText>
                            <SubredditsList items={subreddits} onChange={this.props.onChange}/>
                            <Divider />
                            {this.props.subreddit && !this.props.loading ? ( <Subreddit subreddit={this.props.subreddit} />) : "You didn't choose any subreddit"}
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

Subreddits.PropTypes = {
    subreddit: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default Subreddits;