import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ImageGallery({ close, children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      {isModalVisible ? (
        <ul className={styles.imagesContainer} onClick={() => setIsModalVisible(false)}>
          {children}
        </ul>
      ) : (
        <ul className={styles.imagesContainer} onClick={() => setIsModalVisible(true)}>
          {children}
        </ul>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ImageGallery;