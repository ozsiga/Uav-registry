import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import UavDetails from "./components/uav-details/uav-details";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/uav/:id" component={UavDetails} />
      </Switch>
    </Router>
  );
}

export default App;
