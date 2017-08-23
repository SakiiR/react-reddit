import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class Subreddit extends React.Component {
    render() {
        return (
        <List>
            <Subheader>Posts</Subheader>
            {this.props.subreddit.posts.map(post => {
                return (
                    <ListItem
                        key={post.title}
                        primaryText={post.title}
                        secondaryText={post.domain}
                    />
                );
            })}
        </List>
        );
    }
}

Subreddit.PropTypes = {
    subreddit: PropTypes.array.isRequired
}

export default Subreddit;