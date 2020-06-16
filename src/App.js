import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PublicRoute } from "./services/Route";
import WEB from "./constants/web";

///////////// Pages
const Home = lazy(() => import("./views/home"));
const About = lazy(() => import("./views/about/About"));
const Service = lazy(() => import("./views/service/service"));

const NotFound = lazy(() => import("./components/404/Notfound"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute exact path={WEB.HOME} component={Home} />
        <PublicRoute exact path={WEB.ABOUT} component={About} />
        <PublicRoute exact path={WEB.SERVICES} component={Service} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
