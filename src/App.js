import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Switch>
            <Route path="/" component={Home} />
            <Route path="/mywork" component={MyWork} />
       </Switch>
      </Router>
    );
  }
}

export default App;