import React, { PropTypes, Component } from 'react';
import styles from './LogPage.css';
import withStyles from '../../decorators/withStyles';
import LogForm from '../LogForm/LogForm';
import http from '../../core/HttpClient';
import sessionStore from '../../stores/SessionStore'

@withStyles(styles)
class LogPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  onFlightSubmit = (flight) => {
    http.post('/api/flights', flight).then(function() {
      alert('Flighted Added', flight);
      // TODO redirect
    });
  }

  render() {
    var form;
    let title = 'Log a flight';
    this.context.onSetTitle(title);
    if (sessionStore.exists()) {
      form = <LogForm handleSubmit={this.onFlightSubmit}/>
    } else {
      form = <p>Please <a href='login'>log in</a> to add a flight.</p>
    }
    return (
      <div className="LogPage">
        <div className="LogPage-container">
          <h3>{title}</h3>
          {form}
        </div>
      </div>
    );
  }

}

export default LogPage;
