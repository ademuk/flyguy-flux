import React, { PropTypes, Component } from 'react';
import styles from './LogPage.css';
import withStyles from '../../decorators/withStyles';
import LogForm from '../LogForm/LogForm';
import http from '../../core/HttpClient';
import sessionStore from '../../stores/SessionStore'
import Location from '../../core/Location';
import Link from '../Link/Link';

@withStyles(styles)
class LogPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  onFlightSubmit = (flight) => {
    http.post('/flights', flight).then(function() {
      Location.pushState(null, '/flights');
    });
  }

  render() {
    var form;
    let title = 'Log a flight';
    this.context.onSetTitle(title);
    if (sessionStore.exists()) {
      form = <LogForm handleSubmit={this.onFlightSubmit}/>
    } else {
      form = <p>Please <Link href="login">log in</Link> to add a flight.</p>
    }
    return (
      <div>
        <h3>{title}</h3>
        {form}
      </div>
    );
  }

}

export default LogPage;
