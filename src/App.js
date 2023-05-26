import React, { Component } from "react";
import "./App.scss";
//Import all needed Component for this tutorial
import Profile from "./pages/Profile/Profile";
import Process from "./pages/Process/Process";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
        <Route exact path="/" component={Profile} />
        <Route exact path="/process" component={Process} />
      </Router>
    );
  }
}

export default App;