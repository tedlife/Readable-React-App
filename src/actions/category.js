import { GET_CATEGORIES, GET_POSTS_IN_CATEGORY } from './type';
import * as ReadableAPI from '../utils/ReadableAPI';

export function getCategories() {
  const request = ReadableAPI.getCategories();
  return {
    type: GET_CATEGORIES,
    payload: request,
  };
}

export function getPostsInCategory(category) {
  const request = ReadableAPI.getPostsInCategory(category);
  return {
    type: GET_POSTS_IN_CATEGORY,
    payload: request,
  };
}
