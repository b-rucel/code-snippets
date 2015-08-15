import React from 'react';  
import {DefaultRoute, Route} from 'react-router';



import Main from 'components/main';
import IssueContainer from 'components/issuecontainer';
import IssueDetailContainer from 'components/issuedetailcontainer';

const routes = (
    <Route handler={Main}>
        <DefaultRoute handler={IssueContainer} />

        <Route name="issues" handler={IssueContainer}/>
        <Route name="detail" path="/detail/:id" handler={IssueDetailContainer} />
    </Route>
);

export default routes;  