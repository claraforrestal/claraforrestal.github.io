import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/mywork" component={MyWork} />
      </Router>
    );
  }
}

export default App;