import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import LoginForm from '../LoginForm/LoginForm';
import sessionActions from '../../actions/SessionActions';
import sessionStore from '../../stores/SessionStore'
import Location from '../../core/Location';

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  handleSubmit = (user) => {
    sessionStore.create(user).then(function () {
      sessionActions.created();
      Location.pushState(null, '/flights');
    });
  }

  render() {
    let title = 'Log in';
    this.context.onSetTitle(title);
    return (
      <div>
        <h3>{title}</h3>
        <LoginForm handleSubmit={this.handleSubmit}/>
      </div>
    );
  }

}

export default LoginPage;
