import React, { PropTypes } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import LoginForm from '../LoginForm/LoginForm'
import sessionActions from '../../actions/SessionActions';

@withStyles(styles)
class LoginPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  onLoginSubmit = (user) => {
    sessionActions.create(user);
  }

  render() {
    let title = 'Log in';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h3>{title}</h3>
          <LoginForm onSubmit={this.onLoginSubmit}></LoginForm>
        </div>
      </div>
    );
  }

}

export default LoginPage;
