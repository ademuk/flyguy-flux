import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
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
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <Link className="Navigation-link" href="/flights">Flights</Link>
        <Link className="Navigation-link" href="/log">Log</Link>
        <span className="Navigation-spacer"> | </span>
        {this.state.loggedIn ? <Link className="Navigation-link" href="/logout">Log out</Link> : <Link className="Navigation-link" href="/login">Log in</Link>}
      </div>
    );
  }

}

export default Navigation;
