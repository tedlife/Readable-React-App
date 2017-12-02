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

export function addComment(id, timestamp, body, author, parentId) {
  const request = ReadableAPI.addComment({
    id,
    timestamp,
    body,
    author,
    parentId,
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: ADD_COMMENT, payload: data });
    });
  };
}

export function getComment(id) {
  const request = ReadableAPI.getComment(id);
  return {
    type: GET_COMMENT,
    payload: request,
  };
}

export function voteComment(id, option) {
  ReadableAPI.voteComment(id, option);
  return {
    type: VOTE_COMMENT,
    id,
    option,
  };
}

export function deleteComment(id) {
  ReadableAPI.deleteComment(id);
  return {
    type: DELETE_COMMENT,
    id,
  };
}

export function editComment(id, timestamp, body, callback) {
  const request = ReadableAPI.editComment({
    id,
    timestamp,
    body,
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: EDIT_COMMENT, payload: data });
      callback();
    });
  };
}
