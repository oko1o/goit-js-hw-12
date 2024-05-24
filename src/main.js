import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotoByQuery, PER_PAGE } from './js/pixabay-api';
import { galleryItemsMarkUp } from './js/render-functions';

const addFont = document.head.insertAdjacentHTML(
  'beforeend',
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>'
);

const formElement = document.querySelector('#searchform');
const galleryElement = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let lightBox = new SimpleLightbox('.gallery-item-image a');
let savedSearchQuery = '';
export let galleryCurrentPage = 1;
let totalPages = 0;

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchinput.value.trim();
  savedSearchQuery = searchQuery;
  galleryCurrentPage = 1;
  galleryElement.innerHTML = '';
  loaderElement.classList.remove('is-hidden');

  if (searchQuery === '') {
    galleryElement.innerHTML = '';
    event.target.reset();
    iziToast.error({
      title: 'Error',
      message: "Sorry, input field can't be empty",
      position: 'topRight',
    });
    return;
  }

  const fetchImagesData = await fetchPhotoByQuery(searchQuery);
  console.log(fetchImagesData.data);
  totalPages = Math.ceil(fetchImagesData.data.totalHits / PER_PAGE);
  console.log(totalPages);
  if (fetchImagesData.data.hits.length === 0) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
  galleryElement.innerHTML = galleryItemsMarkUp(fetchImagesData.data.hits);

  event.target.reset();
  loaderElement.classList.add('is-hidden');
  if (totalPages > 1) {
    loadMoreBtn.classList.remove('is-hidden');
  }
  lightBox.refresh();
  galleryCurrentPage += 1;
}

formElement.addEventListener('submit', onSearchFormSubmit);

const smoothScrollOnLoadMore = () => {
  const lastLiItem = document.querySelector('.gallery-item:last-child');
  console.log(lastLiItem);
  const itemHeight = lastLiItem.getBoundingClientRect().height;
  console.log(itemHeight);
  const scrollHeight = itemHeight * 2;
  window.scrollBy({
    top: scrollHeight,
    behavior: 'smooth',
  });
};

async function onLoadMorePressed(event) {
  const fetchImagesData = await fetchPhotoByQuery(savedSearchQuery);
  console.log(fetchImagesData.data);

  console.log(galleryCurrentPage);

  if (fetchImagesData.data.hits.length === 0) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }

  galleryElement.insertAdjacentHTML(
    'beforeend',
    galleryItemsMarkUp(fetchImagesData.data.hits)
  );

  lightBox.refresh();

  if (galleryCurrentPage === totalPages) {
    loadMoreBtn.classList.add('is-hidden');
    loadMoreBtn.removeEventListener('click', onLoadMorePressed);
    iziToast.error({
      title: 'Error',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }

  galleryCurrentPage += 1;
  smoothScrollOnLoadMore();
}

loadMoreBtn.addEventListener('click', onLoadMorePressed);
