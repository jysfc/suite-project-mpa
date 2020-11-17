import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/pages/Result";
import EditProperty from "./components/pages/EditProperty";
import EditSuite from "./components/pages/EditSuite";
import Login from "./components/pages/Login";
import SelectProperty from "./components/pages/SelectProperty";
import Suite from "./components/pages/Suite";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Result} />
        <Route exact path="/create-answer" component={EditProperty} />
        <Route exact path="/create-imagery" component={EditSuite} />
        <Route exact path="/review-answer" component={Login} />
        <Route exact path="/review-cue" component={SelectProperty} />
        <Route exact path="/review-done" component={Suite} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
