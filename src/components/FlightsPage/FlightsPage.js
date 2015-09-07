/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FlightsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class FlightsPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Flights';
    this.context.onSetTitle(title);
    return (
      <div className="FlightsPage">
        <div className="FlightsPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default FlightsPage;
