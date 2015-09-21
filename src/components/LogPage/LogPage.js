import React, { PropTypes, Component } from 'react';
import styles from './LogPage.css';
import withStyles from '../../decorators/withStyles';
import LogForm from '../LogForm/LogForm';
import http from '../../core/HttpClient';

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
    let title = 'Log a flight';
    this.context.onSetTitle(title);
    return (
      <div className="LogPage">
        <div className="LogPage-container">
          <h3>{title}</h3>
          <LogForm handleSubmit={this.onFlightSubmit}/>
        </div>
      </div>
    );
  }

}

export default LogPage;
