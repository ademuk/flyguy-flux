import dispatcher from '../core/Dispatcher';
import SessionConstants from '../constants/SessionConstants';

class SessionActions {
  created(user) {
    return dispatcher.dispatch({
      actionType: SessionConstants.SESSION_CREATED,
      user: user
    });
  }

  destroyed() {
    dispatcher.dispatch({
      actionType: SessionConstants.SESSION_DESTROYED
    });
  }
}

export default new SessionActions();
