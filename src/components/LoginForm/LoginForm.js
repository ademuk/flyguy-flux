import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import styles from './LoginForm.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LoginForm extends Component {

  static propTypes = {
    'handleSubmit': PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var email = ReactDom.findDOMNode(this.refs.email).value.trim();
    var password = ReactDom.findDOMNode(this.refs.password).value.trim();
    if (!email || !password) {
      return;
    }

    this.props.handleSubmit({
      'email': email,
      'password': password
    });

    ReactDom.findDOMNode(this.refs.email).value = '';
    ReactDom.findDOMNode(this.refs.password).value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <label>
              E-mail
              <input type="email" placeholder="Email" ref="email" value="" />
            </label>
          </li>
          <li>
            <label>
              Password
              <input type="password" placeholder="Password" ref="password" value="" />
            </label>
          </li>
          <li>
            <input type="submit" value="Log in" />
          </li>
        </ul>
      </form>
    );
  }
};

export default LoginForm;
