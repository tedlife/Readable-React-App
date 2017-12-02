import { GET_CATEGORIES, GET_POSTS_IN_CATEGORY } from '../actions/type';

export default function category(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case GET_POSTS_IN_CATEGORY:
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      return state;
  }
}
