import React from 'react';
import mui, {Avatar, List, ListDivider, ListItem} from 'material-ui';

class IssueList extends React.Component {
    constructor(props) {
        super(props);

        this._onListItemClick = this._onListItemClick.bind(this);
    }

    _onListItemClick(number, e) {
        e.preventDefault();

        // this.context.router.transitionTo('/detail/'+number);
        this.context.router.transitionTo('detail', {id:number});
    }

    renderIssues({number, title, user, body}) {
        return (
            <div key={number}>
                <ListItem
                    onClick={this._onListItemClick.bind(this, number)}
                    leftAvatar={<Avatar src={user.avatar_url} />}
                    primaryText={title}
                    secondaryText={
                        body
                    }
                    secondaryTextLines={2} />
                <ListDivider />
            </div>
        );
    }

    render() { 
        return (
            <List subheader="NPM issues">
                {this.props.issues.map(this.renderIssues.bind(this))}
            </List>
        );
    }
}

    IssueList.contextTypes = {
        router: React.PropTypes.func.isRequired
    };

export default IssueList;