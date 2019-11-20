import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Template from "components/templates/AuthenticatedTemplate";
import Login from "components/pages/Login";
import Page1 from "components/pages/Page1";
import Page2 from "components/pages/Page2";
import Page3 from "components/pages/Page3";

const App: FunctionComponent = () => {
  return (
    <Template>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Page1" exact component={Page1} />
        <Route path="/Page2" exact component={Page2} />
        <Route path="/Page3" exact component={Page3} />
      </Switch>
    </Template>
  );
};

export default App;
