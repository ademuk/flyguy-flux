import request from 'superagent';
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import SessionStore from '../stores/SessionStore'

const getUrl = path => 'http://localhost:8000/api';

const HttpClient = {

  get: path => new Promise((resolve, reject) => {
    console.log(getUrl(path));
    const req = request
      .get(getUrl(path))
      .accept('application/json')
      .end((err, res) => {
        if (err) {
          if (err.status === 404) {
            resolve(null);
          } else {
            reject(err);
          }
        } else {
          resolve(res.body);
        }
      });

    if (SessionStore.getToken()) {
      req.set('Authorization', 'JWT ' + SessionStore.getToken());
    }
    return req;
  }),

  post: (path, data) => new Promise((resolve, reject) => {
    const req = request
      .post(getUrl(path))
      .send(data)
      .accept('application/json')
      .end((err, res) => {
        if (err) {
          if (err.status === 404) {
            resolve(null);
          } else {
            reject(err);
          }
        } else {
          resolve(res.body);
        }
      });

    if (SessionStore.getToken()) {
      req.set('Authorization', 'JWT ' + SessionStore.getToken());
    }
    return req;
  })

};

export default HttpClient;
