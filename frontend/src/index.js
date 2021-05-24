import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en.json";
import common_pl from "./translations/pl.json";
import {BrowserRouter as Router} from 'react-router-dom';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            common: common_en
        },
        pl: {
            common: common_pl
        },
    },
});

ReactDOM.render(
        <I18nextProvider i18n={i18next}>
            <Router>
                <App/>
            </Router>
        </I18nextProvider>,
    document.getElementById('root')
);

reportWebVitals();
