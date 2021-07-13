import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./pages/home/home";
import SideMenu from "./components/sideMenu/sideMenu";
import CurriculumVitae from "./pages/curriculumVitae/curriculumVitae";

function App() {
  return (
    <div className="base-page">
        <Router>
            <SideMenu />
            <div className="content-side">
                <Switch>
                  <Route exact path="/"><HomePage /></Route>
                  <Route exact path="/cv"><CurriculumVitae /></Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
