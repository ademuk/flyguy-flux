import request from 'superagent';
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import SessionStore from '../stores/SessionStore';

const baseUrl = '/api';
const getUrl = path => {
  if (ExecutionEnvironment.canUseDOM) {
    return baseUrl + path;
  } else {
    return `${process.env.WEBSITE_HOSTNAME}${baseUrl}${path}`;
  }
};

const HttpClient = {

  get: path => new Promise((resolve, reject) => {
    var headers = {};
    if (SessionStore.getToken()) {
      headers = {
        'Authorization': 'JWT ' + SessionStore.getToken()
      };
    }

    return request
      .get(getUrl(path))
      .set(headers)
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
  }),

  post: (path, data) => new Promise((resolve, reject) => {
    var headers = {};
    if (SessionStore.getToken()) {
      headers = {
        'Authorization': 'JWT ' + SessionStore.getToken()
      };
    }

    return request
      .post(getUrl(path))
      .set(headers)
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
  })

};

export default HttpClient;
