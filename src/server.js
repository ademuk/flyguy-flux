import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import ReactDOM from 'react-dom/server';
import Router from './Router';
import SessionStore from './stores/SessionStore'

const server = global.server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json())
server.use(cookieParser());

//
// Register API middleware
// -----------------------------------------------------------------------------

server.get('*', async (req, res, next) => {
  if (req.cookies.sessionToken) {
    SessionStore.setToken(req.cookies.sessionToken);
  }
  next();
});
server.use('/api', require('./api/index'));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404
    };

    if (req.cookies.sessionToken) {
      SessionStore.setToken(req.cookies.sessionToken);
    }

    await Router.dispatch({ path: req.path, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = template(data);
    res.status(statusCode).send(html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
