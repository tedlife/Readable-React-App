import {
  GET_COMMENTS_IN_POST,
  // ADD_COMMENT,
  // GET_COMMENT,
  // VOTE_COMMENT,
  // DELETE_COMMENT,
  // EDIT_COMMENT,
} from '../actions/type';

export default function comment(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS_IN_POST:
      return action.payload.reduce(
        (accumulator, currentValue, currentIndex) => ({
          ...accumulator,
          [currentIndex]: currentValue,
        }),
        {},
      );
    // case ADD_COMMENT:
    //   return;
    // case GET_COMMENT:
    //   return;
    // case VOTE_COMMENT:
    //   return;
    // case DELETE_COMMENT:
    //   return;
    // case EDIT_COMMENT:
    //   return;
    default:
      return state;
  }
}
