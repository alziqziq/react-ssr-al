import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";
import routes from './routes';

const store = configureStore(window.__INITIAL_STATE__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);