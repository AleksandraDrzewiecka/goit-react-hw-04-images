import { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    whenSubmit: PropTypes.func,
  };
  render() {
    const { whenSubmit } = this.props;

    return (
      <header>
        <form className={styles.form} onSubmit={whenSubmit}>
          <button className={styles.button} type="submit">
            <span>Search</span>
          </button>
          <input
            className={styles.input}
            name="searchedText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;