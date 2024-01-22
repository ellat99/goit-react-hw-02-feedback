import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles.div}>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={this.props.changeCallback}
          required
        />
      </div>
    );
  }
}

Filter.propTypes = {
  changeCallback: PropTypes.func.isRequired,
};

export default Filter;
