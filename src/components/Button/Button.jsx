import { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    nextPage: PropTypes.func,
    searchForMore: PropTypes.bool,
  };

  render() {
    const { nextPage, searchForMore, images } = this.props;
    return (
      <>
        {searchForMore && images.length > 0 ? (
          <button className={styles.loadMoreBtn} onClick={e => nextPage(e)}>
            Load more
          </button>
        ) : null}
      </>
    );
  }
}