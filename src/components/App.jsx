import { useState, useEffect } from 'react';
import { fetchImages } from './Services/Api';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery  from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Hearts } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const App = () => {
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [searchedText, setSearchedText] = useState('');
  const [biggerImgUrl, setBiggerImgUrl] = useState('');
  const [isModalVisable, setIsModalVisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchForMore, setSearchForMore] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const searchedPhrase = event.target[1].value.split(' ').join('');

    setSearchedText(searchedPhrase);
    clearState();
  };

  const openModal = bigUrl => {
    setIsModalVisable(true);
    setBiggerImgUrl(bigUrl);
  };

  const closeModal = event => {
    if (event.target.nodeName !== 'IMG' || event.key === 'Escape') {
      setIsModalVisable(false);
      setBiggerImgUrl('');
    }
  };

  const clearState = () => {
    setImages([]);
  };

  const changePage = event => {
    event.preventDefault();
    setActualPage(prevActualPage => prevActualPage + 1);
  };

  const getInfoAbout = event => {
    const bigUrl = event.currentTarget.dataset.bigger;
    openModal(bigUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      const response = await fetchImages(searchedText, actualPage);

      const newImages = response.data.hits.map(image => {
        return {
          id: image.id,
          tags: image.tags,
          previewUrl: image.webformatURL,
          biggerImg: image.largeImageURL,
        };
      });

      setImages(prevImages => [...prevImages, ...newImages]);
      setIsLoading(false);

      if (response.data.hits.length < 12) {
        setSearchForMore(false);
      } else {
        setSearchForMore(true);
      }
    };

    if (searchedText || actualPage > 1) {
      fetchData();
    }
  }, [searchedText, actualPage]);

  return (
    <div onClick={closeModal}>
      <Searchbar whenSubmit={handleSubmit} />
      {isLoading && <Hearts />}
      <ImageGallery
        closeModal={closeModal}
        close={closeModal}
        isModalVisable={isModalVisable}
      >
        <ImageGalleryItem images={images} getInfoAbout={getInfoAbout} />
      </ImageGallery>
      {isModalVisable && (
        <Modal
          bigPhotoUrl={biggerImgUrl}
          closeModal={closeModal}
          tags={images.tags}
          isModalVisable={isModalVisable}
        />
      )}
      <Button
        searchForMore={searchForMore}
        nextPage={changePage}
        images={images}
        actualPage={actualPage}
      />
    </div>
  );
};

App.propTypes = {
  images: PropTypes.array,
  actualPage: PropTypes.number,
  searchedText: PropTypes.string,
  biggerImgUrl: PropTypes.string,
  isModalVisable: PropTypes.bool,
  isLoading: PropTypes.bool,
  searchForMore: PropTypes.bool,
};
