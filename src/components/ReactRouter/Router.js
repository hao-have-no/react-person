import React, {Component} from 'react';

class Router extends Component {
    render() {
        const {history,children} = this.props;
        return children;
    }
}

export default Router;