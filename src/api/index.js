import { Router } from 'express';
import http from '../core/HttpClient'

const router = new Router();

router.post('/token-auth', async (req, res, next) => {
  http.post(req.path, req.body).then(function (response) {
    res.status(200)
      .cookie('sessionToken', response.token, { maxAge: 60 * 60 * 24, httpOnly: true })
      .send(response);
  });
});

router.get('*', async (req, res, next) => {
  http.get(req.path).then(function (response) {
    res.status(200).send(response);
  });
});

router.post('*', async (req, res, next) => {
  http.post(req.path, req.body).then(function (response) {
    res.status(200).send(response);
  });
});

export default router;

