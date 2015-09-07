/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LogPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LogPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Log a flight';
    this.context.onSetTitle(title);
    return (
      <div className="LogPage">
        <div className="LogPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default LogPage;
