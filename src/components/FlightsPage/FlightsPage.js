/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Text } from 'react';
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
    return <div className="FlightsPage">
      <div className="FlightsPage-container">
        <h3>{title}</h3>
        <ul>
          {this.props.results.map(function(result) {
            var href = '/flights/' + result.id;
            return <li key={result.id}>
              <h4><a href={href}>{result.name}</a> <small>{result.date}</small></h4>
            </li>;
          })}
        </ul>
      </div>
    </div>;
  }

}

export default FlightsPage;
