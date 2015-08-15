import React from 'react';
import axios from 'axios';
import IssueDetail from './issuedetail';

class IssueDetailContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            issue: null
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/repos/npm/npm/issues/'+this.props.params.id)
            .then(function(response) {
                this.setState({
                    issue: response.data
                });
            }.bind(this))
            .catch(function(response) {
                console.log(response);
            })
    }

    render() {
        return (
            <IssueDetail issue={this.state.issue} />
        );
    }
}

IssueDetailContainer.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default IssueDetailContainer;