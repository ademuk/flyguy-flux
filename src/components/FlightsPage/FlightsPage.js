import React, { PropTypes, Component } from 'react';
import styles from './FlightsPage.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class FlightsPage extends Component {

  static propTypes = {
    'results': PropTypes.array.isRequired
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  }

  render() {
    let title = 'Flights';
    this.context.onSetTitle(title);
    return (<div className="FlightsPage">
      <div className="FlightsPage-container">
        <h3>{title}</h3>
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
      </div>
    </div>);
  }

}

export default FlightsPage;
