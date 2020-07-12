import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import HomePage from "../pages/ReactRouterPage/index";
import UserPage from "../pages/ReactRouterPage/test1";
import LoginPage from "../pages/ReactRouterPage/test2";
import _404Page from "../pages/ReactRouterPage/_404Page";
// import PrivateRoute from "./PrivateRoute";
// import BottomNav from "../components/BottomNav";

export const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/user",
        component: UserPage,
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        component: _404Page
    }
];

export default function Routes(props) {
    return (
        <Router>
           <Link to="/">首页___>></Link>
      <Link to="/user">用户中心___>></Link>
      <Link to="/login">登录___>></Link>
            {/*<Route component={BottomNav} />*/}

            {/*<Switch>*/}
                {/*{routes.map(Route_ =>*/}
                    {/*Route_.auth ? (*/}
                        {/*<Route_.auth key={Route_.path + "route"} {...Route_} />*/}
                    {/*) : (*/}
                        {/*<Route key={Route_.path + "route"} {...Route_} />*/}
                    {/*)*/}
                {/*)}*/}
            {/*</Switch>*/}

            {/* <Switch>
        <Route exact path="/" component={HomePage} /> */}
            {/* <Route path="/user" component={UserPage} /> */}
            {/* <PrivateRoute path="/user" component={UserPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={_404Page} />
      </Switch> */}
        </Router>
    );
}
