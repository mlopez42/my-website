import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
