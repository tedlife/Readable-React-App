import { GET_POSTS, ADD_POST, GET_POST, VOTE_POST, EDIT_POST, DELETE_POST } from '../actions/type';

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.id]: currentValue,
        }),
        {},
      );
    case ADD_POST:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case GET_POST:
      return {
        post: action.payload,
      };
    case VOTE_POST:
      return action.path === '/:category/:id'
        ? {
          ...state,
          post: {
            ...state.post,
            voteScore:
                action.option === 'upVote' ? state.post.voteScore + 1 : state.post.voteScore - 1,
          },
        }
        : {
          ...state,
          [action.postId]: {
            ...state[action.postId],
            voteScore:
                action.option === 'upVote'
                  ? state[action.postId].voteScore + 1
                  : state[action.postId].voteScore - 1,
          },
        };
    case EDIT_POST:
      return {
        post: action.payload,
      };
    case DELETE_POST:
      return {
        [action.id]: {
          ...state.post,
          deleted: true,
        },
      };
    default:
      return state;
  }
}
