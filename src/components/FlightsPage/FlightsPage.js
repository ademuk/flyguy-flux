import React, { PropTypes, Component } from 'react';
import styles from './FlightsPage.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link/Link';

@withStyles(styles)
class FlightsPage extends Component {

  static propTypes = {
    'results': PropTypes.array.isRequired
  }

  render() {
    return (<div className="FlightsPage">
      <div className="FlightsPage-container">
        <h3>Flights</h3>
        <ul>
          {this.props.results.map(function(result) {
            const href = '/flights/' + result.id;
            return (<li key={result.id}>
              <h4>
                <Link href={href}>{result.name}</Link>
                <small>{result.date}</small>
              </h4>
            </li>);
          })}
        </ul>
        {this.props.results.length === 0 ? <p>You don't have any flights yet. You should <Link href="log">log a flight</Link>.</p> : ''}
      </div>
    </div>);
  }

}

export default FlightsPage;
