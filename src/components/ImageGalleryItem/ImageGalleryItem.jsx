import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    getInfoAbout: PropTypes.func.isRequired,
  };
  render() {
    const { images, getInfoAbout } = this.props;
    return (
      <>
        {images.map(image => {
          const { id, previewUrl, tags, biggerImg } = image;
          return (
            <li key={id} className={styles.imageListElem}>
              <img
                className={styles.image}
                src={previewUrl}
                alt={tags}
                data-bigger={biggerImg}
                onClick={event => {
                  getInfoAbout(event);
                }}
              />
            </li>
          );
        })}
      </>
    );
  }
}