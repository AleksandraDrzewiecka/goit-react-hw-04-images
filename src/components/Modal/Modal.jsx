import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    bigPhotoUrl: PropTypes.string.isRequired,
    tags: PropTypes.array,
    closeModal: PropTypes.func.isRequired,
    isModalVisable: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    const { bigPhotoUrl, tags, closeModal, isModalVisable } = this.props;

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
  }
}