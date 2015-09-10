import dispatcher from '../core/Dispatcher';
import SessionConstants from '../constants/SessionConstants';

class SessionActions {
  create(user) {
    dispatcher.dispatch({
      actionType: SessionConstants.SESSION_CREATE,
      user: user
    });
  }

  destroy() {
    dispatcher.dispatch({
      actionType: SessionConstants.SESSION_DESTROY
    });
  }
}

export default new SessionActions();
