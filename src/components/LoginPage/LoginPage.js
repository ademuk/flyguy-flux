import React, { PropTypes } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import LoginForm from '../LoginForm/LoginForm'
import http from '../../core/HttpClient';

@withStyles(styles)
class LoginPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  onLoginSubmit = (user) => {
    http.post('/api/token-auth', user).then(function () {
      alert('Logged in', user);
      // TODO redirect
    });
  }

  render() {
    let title = 'Log in';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h3>{title}</h3>
          <LogForm onSubmit={this.onLoginSubmit}></LogForm>
        </div>
      </div>
    );
  }

}

export default LoginPage;
