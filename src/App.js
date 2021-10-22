import './App.css';
import React, {useEffect} from "react";
import {Switch, Route, Redirect} from 'react-router';
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/404";
import {WEBSITE_TITLE} from "./utils/data/information";
import {BrowserRouter} from "react-router-dom";

const App = () => {

    useEffect(() => {
        const currentLanguage = localStorage.getItem('language');
        if (currentLanguage) {
            document.title = WEBSITE_TITLE[currentLanguage];
        }
    });

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/hall-of-fame'} component={ProjectPage}/>
                <Route path={'/not-found'} component={NotFoundPage}/>
                <Redirect from={'/*'} to={'/not-found'}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
