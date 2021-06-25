import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import MyPage from "../Routes/MyPage";
import Service from "../Routes/Service";
import PageNotFound from "./PageNotFound";
import LogInOut from "../Routes/LogInOut";

const AggRouter = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path = "/" exact component = {Service} />
                <Route path = "/mypage" exact component = {MyPage} />
                <Route path = "/login" exact component = {LogInOut} />
                <Route path = "/404error" exact component = {PageNotFound} />
                <Redirect from = "*" to = "/" />
            </Switch>
        </>
    </Router>
);

export default AggRouter;