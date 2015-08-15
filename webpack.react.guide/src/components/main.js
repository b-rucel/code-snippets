import React from 'react';
import {RouteHandler} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import mui, {AppBar, LeftNav, MenuItem, RefreshIndicator} from 'material-ui';
const ThemeManager = new mui.Styles.ThemeManager();

class Main extends React.Component {  
    constructor() {
        super();
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                    title="Github Issue Viewer"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />

                <RouteHandler />
            </div>
        );
    }
}


Main.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Main;  