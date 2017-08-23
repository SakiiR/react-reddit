import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class SubredditsList extends React.Component {

    state = {
        value: ''
    }

    onChange(event, key, payload) {
        this.setState({value: payload});
        this.props.onChange(payload);
    }

    render() {
        return (
            <SelectField 
                value={this.state.value}
                floatingLabelText="Subreddit"
                onChange={this.onChange.bind(this)}>
                {this.props.items.map(item => {
                    return ( <MenuItem key={item} value={item} primaryText={item}/> );
                })}
            </SelectField>
        );
    }
}

SubredditsList.PropTypes = {
    onChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

export default SubredditsList;