import { fetchImages, KEY_API, URL } from './js/pixabay-api';
import { renderedGalleryMarkup } from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

let searchQuery = '';
let page = 1;

form.addEventListener('submit', onSubmit);
loader.hidden = true;
loadBtn.hidden = true;

async function onSubmit(event) {
  event.preventDefault();

  loader.hidden = false;
  const { searchRequest } = event.currentTarget.elements;
  searchQuery = searchRequest.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: '',
      position: 'topRight',
      message: 'Start typing in',
    });
    loader.hidden = true;
    return;
  }

  galleryList.innerHTML = '';
  page = 1;

  try {
    const data = await fetchImages(searchQuery);
    if (!data) return; 

    if (!data.total) {
      iziToast.error({
        title: 'Error',
        position: 'center',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      loadBtn.hidden = true; 
    } else {
      renderedGalleryMarkup(data.hits);
      if (data.totalHits > 15) {
        loadBtn.hidden = false;
      } else {
        loadBtn.hidden = true; 
      }
    }
  } finally {
    loader.hidden = true;
  }

  form.reset();
}

loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  page += 1;
  loadBtn.disabled = true;
  loader.hidden = false;

  try {
    const data = await fetchImages(searchQuery, page);
    if (data && data.hits.length > 0) {
      renderedGalleryMarkup(data.hits);
    }

    if (page * 15 >= data.totalHits) {
      loadBtn.hidden = true;
      iziToast.info({
        title: 'End of results',
        position: 'bottomRight',
        message: "We're sorry, but you've reached the end of search results!",
      });
    } else {
      loadBtn.hidden = false;
    }

    loadBtn.disabled = false;
    scrollToNewCards();
  } catch (error) {
    alert(error.message);
  } finally {
    loader.hidden = true;
  }
}

function getCardHeight() {
  const firstCard = document.querySelector('.gallery-card');
  if (firstCard) {
    const cardRect = firstCard.getBoundingClientRect();
    return cardRect.height;
  }
  return 0;
}

function scrollToNewCards() {
  const cardHeight = getCardHeight();
  if (cardHeight > 0) {
    window.scrollBy({
      top: cardHeight * 2,
      left: 0,
      behavior: 'smooth'
    });
  }
}