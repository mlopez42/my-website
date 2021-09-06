import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import HomePage from "./pages/home/home";
import SideMenu from "./components/sideMenu/sideMenu";
import CurriculumVitae1 from "./pages/curriculumVitae1/curriculumVitae1";
import CurriculumVitae2 from "./pages/curriculumVitae2/curriculumVitae2";

function App() {
    let cvStyle: number = 1;

    function cv() {
        switch (cvStyle) {
            case 0:
                return <CurriculumVitae1 />;
            case 1:
                return <CurriculumVitae2 />;
        }
    }

    return (
    <div className={cvStyle === 0 ? "base-page" : "base-page-2"}>
        <Router>
            <SideMenu sideStyle={cvStyle} />
            <div className="content-side">
                <Switch>
                  {/*<Route exact path="/"><HomePage /></Route>*/}
                  <Route exact path="/">
                      {cv}
                  </Route>
                </Switch>
            </div>
        </Router>
    </div>
    );
}

export default App;
