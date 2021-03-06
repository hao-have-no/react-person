import React, {Component} from 'react';
import { createBrowserHistory } from 'history'
import Router from "./Router";

class BrowserRouter extends Component {
    constructor(props){
        super(props);
        this.history = createBrowserHistory();
        console.log('props',this.props.children,this.history)
    }

    render() {
        return <Router children={this.props.children} history={this.history} />;
    }
}

export default BrowserRouter;
