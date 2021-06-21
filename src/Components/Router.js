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

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <MyPage path = "/mypage" exact component = {MyPage} />
            </Switch>
        </>
    </Router>
);