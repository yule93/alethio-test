import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header />
        </>
    </Router>
);