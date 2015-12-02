import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import styles from './LogForm.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LogForm extends Component {

  static propTypes = {
    'handleSubmit': PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var name = ReactDom.findDOMNode(this.refs.name).value.trim();
    var date = ReactDom.findDOMNode(this.refs.date).value.trim();
    var notes = ReactDom.findDOMNode(this.refs.notes).value.trim();
    if (!name || !date || !notes) {
      return;
    }

    this.props.handleSubmit({
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
      <form name="flightForm" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label forHtml="name" className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input ref="name" type="text" className="form-control" placeholder="Name" required />
          </div>
        </div>
        <div className="form-group">
          <label forHtml="date" className="col-sm-2 control-label">Date</label>
          <div className="col-sm-10">
            <input ref="date" type="date" className="form-control" placeholder="Date" required />
          </div>
        </div>
        <div className="form-group">
          <label forHtml="notes" className="col-sm-2 control-label">Notes</label>
          <div className="col-sm-10">
            <textarea ref="notes" className="form-control" rows="5" placeholder="Notes" required>
            </textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Save</button>
          </div>
        </div>
      </form>
    );
  }
};

export default LogForm;
