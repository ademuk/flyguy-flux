import React, { PropTypes, Component } from 'react';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Button from '../Button';
import sessionStore from '../../stores/SessionStore'

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {loggedIn: sessionStore.exists()};
  }

  componentDidMount() {
    sessionStore.addChangeListener(() => {
      this.setState({loggedIn: sessionStore.exists()});
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">

            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="#/">flyguy</a>
          </div>

          <div className="collapse navbar-collapse" id="js-navbar-collapse" ng-controller="NavCtrl">
            <ul className="nav navbar-nav">
              <li>
                <Link href="/flights">Flights</Link>
              </li>
              <li>
                <Link href="/log">Log</Link>
              </li>
              <li>
                {this.state.loggedIn ? <Link className="btn btn-default navbar-btn" to="/logout">Log out</Link> : <Link className="btn btn-default navbar-btn" to="/login">Log in</Link>}
              </li>
            </ul>
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href="https://github.com/ademuk/flyguy-isomorphic"><i className="fa fa-github fa-lg"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Navigation;
