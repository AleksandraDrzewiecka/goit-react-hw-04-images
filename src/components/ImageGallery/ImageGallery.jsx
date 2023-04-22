import { Component } from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.node,
    isModalVisable: PropTypes.bool,
  };

  render() {
    const { children, close, isModalVisable } = this.props;
    return (
      <>
        {isModalVisable ? (
          <ul className={styles.imagesContainer} onClick={close}>
            {children}
          </ul>
        ) : (
          <ul className={styles.imagesContainer}>{children}</ul>
        )}
      </>
    );
  }
}