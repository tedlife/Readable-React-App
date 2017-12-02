import {
  GET_COMMENTS_IN_POST,
  ADD_COMMENT,
  GET_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from '../actions/type';

export default function comment(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS_IN_POST:
      return action.payload.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.id]: currentValue,
        }),
        {},
      );
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case GET_COMMENT:
      return action.payload;
    case VOTE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore:
            action.option === 'upVote'
              ? state[action.id].voteScore + 1
              : state[action.id].voteScore - 1,
        },
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true,
        },
      };
    case EDIT_COMMENT:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
