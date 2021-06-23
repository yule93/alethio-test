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

const AggRouter = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path = "/" component = {Service} />
                <Route path = "/mypage" component = {MyPage} />
                <Route path = "/404error" component = {PageNotFound} />
                <Redirect from = "*" to = "/" />
            </Switch>
        </>
    </Router>
);

export default AggRouter;