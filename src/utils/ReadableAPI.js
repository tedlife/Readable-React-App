const api = 'http://localhost:3001';

// Generate a unique token for storing your bookshelf data on the backend server.
let tokenKey = localStorage.token;
if (!tokenKey) {
  localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
  tokenKey = localStorage.token;
}

const headers = {
  Accept: 'application/json',
  Authorization: tokenKey,
};

// Categories
export const getCategories = () => fetch(`${api}/categories`, { headers }).then(res => res.json());

export const getPostsInCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

// Posts
export const getPosts = () => fetch(`${api}/posts`, { headers }).then(res => res.json());

export const addPost = body =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers }).then(res => res.json());

export const votePost = body =>
  fetch(`${api}/posts/${body.postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());

export const editPost = body =>
  fetch(`${api}/posts/${body.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res);

// Comments
export const getCommentsInPost = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(res => res.json());

export const addComment = (commentId, timestamp, body, author, postId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: `${commentId}`,
      timestamp: `${timestamp}`,
      body: `${body}`,
      author: `${author}`,
      parentId: `${postId}`,
    }),
  }).then(res => res.json());

export const getComment = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers }).then(res => res.json());

export const voteComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: `${option}` }),
  }).then(res => res.json());

export const editComment = (commentId, timestamp, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ timestamp: `${timestamp}`, body: `${body}` }),
  }).then(res => res.json());

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  }).then(res => res);
