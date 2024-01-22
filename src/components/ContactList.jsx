import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    let list = this.props.listToRender;
    return (
      <ul>
        {list.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className={styles.delete}
              onClick={this.props.deleteCallback}
              id={contact.id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  listToRender: PropTypes.array.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default ContactList;
