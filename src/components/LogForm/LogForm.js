import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import styles from './LogForm.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LogForm extends React.Component {

    handleSubmit = (event) => {
      event.preventDefault();
      var name = ReactDom.findDOMNode(this.refs.name).value.trim();
      var date = ReactDom.findDOMNode(this.refs.date).value.trim();
      var notes = ReactDom.findDOMNode(this.refs.notes).value.trim();
      if (!name || !date || !notes) {
        return;
      }

      this.props.onSubmit({
        'name': name,
        'date': date,
        'notes': notes
      });

      ReactDom.findDOMNode(this.refs.name).value = '';
      ReactDom.findDOMNode(this.refs.date).value = '';
      ReactDom.findDOMNode(this.refs.notes).value = '';
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                Name
                <input type="text" placeholder="Name" ref='name' />
              </label>
            </li>
            <li>
              <label>
                Date
                <input type="date" placeholder="Date" ref='date' />
              </label>
            </li>
            <li>
              <label>
                Notes
                <textarea placeholder="Notes" ref='notes'></textarea>
              </label>
            </li>
            <li>
              <input type='submit' value='Save' />
            </li>
          </ul>
        </form>
      );
    }
};

export default LogForm;
