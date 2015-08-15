import React from 'react';
import mui, {Card, CardHeader, Avatar, CardMedia, CardTitle, CardActions, CardText, FlatButton} from 'material-ui';

class IssueDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const issue = this.props.issue;

        if(!issue) {
            return (
                <div>
                    loading
                </div>
            );
        }

        return (
            <div style={{padding:"20px"}}>
                <Card>
                    <CardHeader
                        title={issue.title}
                        avatar={<Avatar src={issue.user.avatar_url} />}/>

                    <CardTitle title={issue.title} subtitle={'#'+issue.number +' by <a href="'+ issue.user.login +'">@'+ issue.user.login +'</a>'} />

                    <CardText>
                        <pre style={{whiteSpace: "pre-wrap"}}>
                        {issue.body.replace(/(\@\w+)/g, function (match) {
                            return '&lt;a href="#"&gt;'+ match +'&lt;/a&gt;';
                        })}
                        </pre>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default IssueDetail;