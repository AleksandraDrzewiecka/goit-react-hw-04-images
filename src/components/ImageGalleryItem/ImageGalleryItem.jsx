import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ images, getInfoAbout }) {
  return (
    <>
      {images.map((image) => {
        const { id, previewUrl, tags, biggerImg } = image;
        return (
          <li key={id} className={styles.imageListElem}>
            <img
              className={styles.image}
              src={previewUrl}
              alt={tags}
              data-bigger={biggerImg}
              onClick={(event) => {
                getInfoAbout(event);
              }}
            />
          </li>
        );
      })}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  getInfoAbout: PropTypes.func.isRequired,
};

export default ImageGalleryItem;