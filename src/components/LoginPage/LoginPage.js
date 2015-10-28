import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import LoginForm from '../LoginForm/LoginForm';
import sessionActions from '../../actions/SessionActions';

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  handleSubmit = (user) => {
    sessionActions.create(user);
  }

  render() {
    let title = 'Log in';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h3>{title}</h3>
          <LoginForm handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }

}

export default LoginPage;
