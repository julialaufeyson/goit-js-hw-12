import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';
import axios from 'axios';

export const KEY_API = '43230635-158e2f6795128fbec19d81d21';
export const URL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page = 1) {
  try {
    const { data } = await axios(`${URL}`, {
      params: {
        key: KEY_API,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });
    return data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Failed to fetch images. Please try again later.',
    });
    return null;
  }
}