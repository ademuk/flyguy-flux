/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FlightPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class FlightPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Flight';
    this.context.onSetTitle(title);
    return (
      <div className="FlightPage">
        <div className="FlightPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default FlightPage;
