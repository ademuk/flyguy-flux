import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import FlightsPage from './components/FlightsPage';
import FlightPage from './components/FlightPage';
import LogPage from './components/LogPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ContentPage from './components/ContentPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/flights', async () => {
    const data = await http.get(`/api/flights`);
    return <FlightsPage {...data} />;
  });

  on('/flights/:id', async (req) => {
    const data = await http.get(`/api/flights/${req.params.id}`);
    return <FlightPage {...data} />;
  });

  on('/log', async () => <LogPage />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );

});

export default router;
