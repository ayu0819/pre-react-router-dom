import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Top,About,Portfolio} from "./Pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;