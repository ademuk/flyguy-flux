import React, { PropTypes, Component } from 'react';
import styles from './FlightPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class FlightPage extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  render() {
    this.context.onSetTitle(this.props.name);
    return (
      <div className="FlightPage">
        <h3>{this.props.name} <small>{this.props.date}</small></h3>
        <pre>{this.props.notes}</pre>
      </div>
    );
  }

}

export default FlightPage;
