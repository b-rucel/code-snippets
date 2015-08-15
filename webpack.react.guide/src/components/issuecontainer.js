import React from 'react';
import axios from 'axios';
import IssueList from './issuelist';


class IssueListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/repos/npm/npm/issues")
            .then(function(response) {
                this.setState({
                    issues: response.data
                });
            }.bind(this))
            .catch(function(response) {
                console.log(response);
            })
    }

    render() {
        return <IssueList issues={this.state.issues} />;
    }
}

export default IssueListContainer;