/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LogPage.css';
import withStyles from '../../decorators/withStyles';
import LogForm from '../LogForm/LogForm'
import http from '../../core/HttpClient';

@withStyles(styles)
class LogPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  onFlightSubmit = (flight) => {
    http.post('/api/flights', flight).then(function () {
      alert('Flighted Added', flight);
    });
  }

  render() {
    let title = 'Log a flight';
    this.context.onSetTitle(title);
    return (
      <div className="LogPage">
        <div className="LogPage-container">
          <h3>{title}</h3>
          <LogForm onSubmit={this.onFlightSubmit}></LogForm>
        </div>
      </div>
    );
  }

}

export default LogPage;
