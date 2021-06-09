import './App.css';
import React from "react";
import {Switch, Redirect, Route} from 'react-router';
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {

    return (
        <Switch>
            <Route exact path={'/'} component={MainPage}/>
            <Route exact path={'/hall-of-fame'} component={ProjectPage}/>
            <Redirect from={'/*'} to={'/'}/>
        </Switch>
    );
}

export default App;
