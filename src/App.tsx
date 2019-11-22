import React, { FunctionComponent } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import LoginPage from "components/pages/LoginPage";
import Page1 from "components/pages/Page1";
import Page2 from "components/pages/Page2";
import Page3 from "components/pages/Page3";

const history = createBrowserHistory();

const App: FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/Page1" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
        <Route exact path="/Page3" component={Page3} />
      </Switch>
    </Router>
  );
};

export default App;
