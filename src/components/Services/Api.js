import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// Personal key from and start state for Api
const PERSONAL_API_KEY = '35115156-da088c1773af75ae0c50fe510';
const INITIAL_STATE = {
  initialPage: 1,
  imagesPerPage: 12,
};

const { initialPage, imagesPerPage } = INITIAL_STATE;

// Function to fetch searched phrase and change page:
export const fetchImages = async (searchedText, actualPage = initialPage) => {
  try {
    const response = await axios.get(
      `?q=${searchedText}&page=${actualPage}&key=${PERSONAL_API_KEY}&image_type=photo&orientation=horizontal&per_page=${imagesPerPage}`
    );
    // console.log('Response in Api: ', response);
    return response;
  } catch (error) {
    console.log('Ups! We got a problem with Api: ', error);
    alert('Look in console!');
  }
};

fetchImages.PropTypes = {
  searchedText: PropTypes.string.isRequired,
  actualPage: PropTypes.number,
};