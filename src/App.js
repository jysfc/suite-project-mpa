import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/pages/Result";
import EditProperty from "./components/pages/EditProperty";
import EditSuite from "./components/pages/EditSuite";
import Login from "./components/pages/Login";
import SelectProperty from "./components/pages/SelectProperty";
import Suite from "./components/pages/Suite";
import NotFound from "./components/pages/NotFound";

export default function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Result} />
            <Route exact path="/edit-property" component={EditProperty} />
            <Route exact path="/edit-suite" component={EditSuite} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/select-property" component={SelectProperty} />
            <Route exact path="/suite" component={Suite} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}
