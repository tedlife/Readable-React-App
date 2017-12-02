import {
  GET_COMMENTS_IN_POST,
  ADD_COMMENT,
  GET_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from './type';

import * as ReadableAPI from '../utils/ReadableAPI';

export function getCommentsInPost(postId) {
  const request = ReadableAPI.getCommentsInPost(postId);
  return {
    type: GET_COMMENTS_IN_POST,
    payload: request,
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function getComment(comment) {
  return {
    type: GET_COMMENT,
    comment,
  };
}

export function voteComment(comment) {
  return {
    type: VOTE_COMMENT,
    comment,
  };
}

export function deleteComment(comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  };
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  };
}
