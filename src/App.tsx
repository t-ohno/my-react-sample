import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHistory } from 'app/history';
import LoginPage from 'components/pages/LoginPage';
import Page1 from 'components/pages/Page1';
import Page2 from 'components/pages/Page2';
import Page3 from 'components/pages/Page3';
import Page4 from 'components/pages/Page4';

export default class App extends React.Component {
  render() {
    const history = createHistory();

    return (
      <Router history={history}>
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/Page1" component={Page1} />
            <Route exact path="/Page2" component={Page2} />
            <Route exact path="/Page3" component={Page3} />
            <Route exact path="/Page4" component={Page4} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
