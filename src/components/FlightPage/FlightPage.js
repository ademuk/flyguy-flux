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
          <h3>{this.props.name}</h3>
          <p>{this.props.date}</p>
          <pre>{this.props.notes}</pre>
        </div>
      </div>
    );
  }

}

export default FlightPage;
