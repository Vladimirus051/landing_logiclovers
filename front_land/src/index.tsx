
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";

// @ts-ignore
import ReactDOM from "react-dom/client";
import React from "react";
import Router from "./router";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Index from "./components/SoftwarePrinciples";
import AboutUs from "./components/AboutUs";
// VisitAPI.getRegCount()

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => (
    root.render(
    <HashRouter >
        <Switch>
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/software-principles" component={Index}/>
            <Route path="/about-us" component={AboutUs} />
            <Route path={'/'} component={Router} />
        </Switch>
    </HashRouter>
            )
);
App()

