import React from 'react';
import express from "express";
import cors from "cors";
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom"
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import routes from './routes';
import configureStore from './redux/configureStore';

const server = express();

server.use(cors());
server.use(express.static('public'));

server.get("*", (req, res, next) => {
  res.locals.data = {
    app: {}
  };

  const store = configureStore(res.locals.data);
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(store.getState())}</script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
});

server.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
});
