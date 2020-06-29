import React, {Component} from 'react';
import { BrowserRouter as Router , Link, Route,Switch} from "react-router-dom";
import IndexPage from "./indexPage";
import UserPage from "./UserPage/index";
import EmptyPage from "./EmptyPage";

class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>RouterPage</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>

                    <Switch>
                        <Route
                            exact
                            path="/"
                            component = {IndexPage}
                            children = {()=> <div>children</div>}
                            render = {()=> <div>render</div>}
                        />
                        <Route path="/user" component={UserPage}/>
                        <Route component={EmptyPage}></Route>
                    </Switch>
                </Router>
            </div>
        );
    //    children > component  > render
    }
}

export default RouterPage;
