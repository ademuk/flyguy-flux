import dispatcher from '../core/Dispatcher';
import EventEmitter from 'events';
import SessionConstants from '../constants/SessionConstants';
import http from '../core/HttpClient';

const CHANGE_EVENT = 'change';
var _token = null;

/**
 * @param  {String} value
 */
function setToken(value) {
  if (typeof(localStorage) !== 'undefined') {
    if (value) {
      localStorage.setItem('sessionToken', value);
    } else {
      localStorage.removeItem('sessionToken');
    }
  } else {
    _token = value || null;
  }
}

function getToken() {
  if (typeof(localStorage) !== 'undefined') {
    return localStorage.getItem('sessionToken');
  } else {
    return _token;
  }
}

/**
 * Create a Session item.
 *
 * @param  {Object} user
 */
function create(user) {
  return http.post('/token-auth/', user).then(function(response) {
    setToken(response.token);
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

  getToken() {
    return getToken();
  }

  setToken(token) {
    setToken(token);
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
