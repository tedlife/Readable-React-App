import { GET_POSTS, ADD_POST, GET_POST, VOTE_POST, EDIT_POST, DELETE_POST } from './type';
import * as ReadableAPI from '../utils/ReadableAPI';

export function getPosts() {
  const request = ReadableAPI.getPosts();
  return {
    type: GET_POSTS,
    payload: request,
  };
}

export function addPost(id, timestamp, title, body, author, category, callback) {
  const request = ReadableAPI.addPost({
    id,
    timestamp,
    title,
    body,
    author,
    category,
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: ADD_POST, payload: data });
      callback();
    });
  };
}

export function getPost(postId) {
  const request = ReadableAPI.getPost(postId);
  return {
    type: GET_POST,
    payload: request,
  };
}

export function votePost(postId, option, path, index) {
  ReadableAPI.votePost({ postId, option });
  return {
    type: VOTE_POST,
    postId,
    option,
    path,
    index,
  };
}

export function editPost(id, title, body, callback) {
  const request = ReadableAPI.editPost({
    id,
    title,
    body,
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: EDIT_POST, payload: data });
      callback();
    });
  };
}

export function deletePost(id, callback) {
  ReadableAPI.deletePost(id).then(callback);
  return {
    type: DELETE_POST,
    id,
  };
}
