import dispatcher from '../core/Dispatcher';
import EventEmitter from 'events';
import SessionConstants from '../constants/SessionConstants';
import http from '../core/HttpClient';

var CHANGE_EVENT = 'change';

/**
 * @param  {String} value
 */
function setToken(value) {
  //TODO server cookie impl.
  if (value) {
    localStorage.setItem('sessionToken', value);
  } else {
    localStorage.removeItem('sessionToken');
  }
}

function getToken() {
  //TODO server cookie impl. Look at express request
  return localStorage.getItem('sessionToken');
}

/**
 * Create a Session item.
 *
 * @param  {Object} user
 */
function create(user) {
  return http.post('/api/token-auth', user).then(function(response) {
    setToken(response.data.token);
  });
}

/**
 * Destroy a Session item.
 */
function destroy() {
  setToken(null);
}

class SessionStore extends EventEmitter {
  /**
   * Get the entire collection of TODOs.
   *
   * @return {Object}
   */
  exists() {
    // TODO check expiry date
    return !!getToken();
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param {Function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {Fuunction} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const sessionStore = new SessionStore();

dispatcher.register(function(action) {
  switch (action.actionType) {
  case SessionConstants.SESSION_CREATE:
    create(action.user).then(function() {
      sessionStore.emitChange();
    });
    break;

  case SessionConstants.SESSION_DESTROY:
    destroy();
    sessionStore.emitChange();
    break;
  }
});

export default sessionStore;
