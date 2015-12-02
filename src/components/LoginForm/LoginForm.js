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
      <form name="loginForm" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label forHtml="email" className="col-sm-2 control-label">E-mail</label>
          <div className="col-sm-10">
            <input ref="email" type="email" className="form-control" placeholder="E-mail" required />
          </div>
        </div>
        <div className="form-group">
          <label forHtml="password" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input ref="password" type="password" className="form-control" placeholder="Password" required />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Log in</button>
          </div>
        </div>
      </form>
    );
  }
};

export default LoginForm;
