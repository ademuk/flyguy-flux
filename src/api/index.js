/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { Router } from 'express';

const router = new Router();

router.get('/flights/:id', async (req, res, next) => {
  try {
    res.status(200).send({
      'id': req.params.id,
      'url': 'http://foo.bar/api/flights/' + req.params.id,
      'name': 'Flight ' + req.params.id,
      'date': '2015-05-05',
      'notes': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis tortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere ligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem. Nullam efficitur vulputate mauris, nec maximus leo dignissim id.'
    });
  } catch (err) {
    next(err);
  }
});

router.get('/flights', async (req, res, next) => {
  try {
    res.status(200).send({
      'results': [
        {
          'id': 1,
          'url': 'http://foo.bar/api/flights/1',
          'name': 'Flight 1',
          'date': '2015-05-05',
          'notes': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis tortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere ligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem. Nullam efficitur vulputate mauris, nec maximus leo dignissim id.'
        }
      ]
    });
  } catch (err) {
    next(err);
  }
});

export default router;

