import { useEffect } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ bigPhotoUrl, tags, closeModal, isModalVisable }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    isModalVisable && (
      <div className={styles.background}>
        <img
          className={styles.modal}
          src={bigPhotoUrl}
          alt={tags}
          onClick={closeModal}
        />
      </div>
    )
  );
};

Modal.propTypes = {
  bigPhotoUrl: PropTypes.string.isRequired,
  tags: PropTypes.array,
  closeModal: PropTypes.func.isRequired,
  isModalVisable: PropTypes.bool.isRequired,
};