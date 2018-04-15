import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DemoForm from './App';
import FormContainer from './modules/form/form.container';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <DemoForm />
  </Provider>,
  document.getElementById('root')
);
