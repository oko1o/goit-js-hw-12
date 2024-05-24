import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { galleryCurrentPage } from '../main.js';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '43833375-8d3f0c892462ae71a1cd36e3a';
export const PER_PAGE = 15;

export const fetchPhotoByQuery = q => {
  const params = {
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: galleryCurrentPage,
  };
  return axios.get(`?key=${API_KEY}&`, { params });
};
