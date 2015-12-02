import React, { PropTypes, Component } from 'react';
import styles from './FlightsPage.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link/Link';

@withStyles(styles)
class FlightsPage extends Component {

  static propTypes = {
    results: PropTypes.array.isRequired
  }

  render() {
    const noFlightsElement = <p>You don't have any flights yet. You should <Link href="log">log a flight</Link>.</p>;
    return (
      <div>
        <h3>Flights</h3>
        <ul className="flights">
          {this.props.results.map(function(result) {
            const href = '/flights/' + result.id;
            return (
              <li key={result.id}>
                <h4>
                  <Link href={href}>{result.name}</Link> <small>{result.date}</small>
                </h4>
                <p>{result.notes}</p>
              </li>
            );
          })}
        </ul>
        {this.props.results.length === 0 ? noFlightsElement : ''}
      </div>
    );
  }

}

export default FlightsPage;
