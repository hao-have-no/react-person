import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class PageThree extends Component {
    render() {
        return (
            <Redirect to={{pathname: '/welcome'}}/>
        )
    }
}

export default PageThree;
