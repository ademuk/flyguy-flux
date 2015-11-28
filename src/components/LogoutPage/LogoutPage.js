import React, { PropTypes, Component } from 'react';
import sessionActions from '../../actions/SessionActions';
import sessionStore from '../../stores/SessionStore'
import Location from '../../core/Location';

class LogoutPage extends Component {

  componentDidMount() {
    sessionStore.destroy();
    sessionActions.destroyed();
    Location.pushState(null, '/login');
  }

  render() {
    return <div></div>
  }
}

export default LogoutPage;
