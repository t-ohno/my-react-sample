import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'tippy.js/dist/tippy.css';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { Provider } from 'react-redux';
import I18N from 'app/i18n';
import configureStore from 'app/store';
import Modal from 'react-modal';

const store = configureStore({
  initialState: { language: 'en', counter: 0 }
});

Modal.setAppElement('#root');

ReactDOM.render(
  <Provider store={store}>
    <I18N>
      <App />
    </I18N>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
