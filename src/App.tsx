import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHistory } from 'app/history';
import { Transition } from 'react-transition-group';
import MessageBar from 'components/organisms/MessageBar';
import LoginPage from 'components/pages/LoginPage';
import Page1 from 'components/pages/Page1';
import Page2 from 'components/pages/Page2';
import Page3 from 'components/pages/Page3';

interface Props {}

type State = {
  messageBarValue?: string;
  visibleMessageBar: boolean;
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      visibleMessageBar: false
    };

    this.hideMessageBar = this.hideMessageBar.bind(this);
  }

  showMessageBar = () => {
    this.setState({ visibleMessageBar: true });
  };

  hideMessageBar = () => {
    this.setState({ visibleMessageBar: false });
  };

  render() {
    const history = createHistory();

    return (
      <Router history={history}>
        <Suspense fallback="loading">
          <Transition in={this.state.visibleMessageBar} timeout={1000}>
            {() =>
              this.state.visibleMessageBar && (
                <MessageBar message={this.state.messageBarValue} onClose={this.hideMessageBar} />
              )
            }
          </Transition>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/Page1" component={Page1} />
            <Route
              exact
              path="/Page2"
              render={() => <Page2 messageBarValue={this.state.messageBarValue} showMessageBar={this.showMessageBar} />}
            />
            <Route exact path="/Page3" component={Page3} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
