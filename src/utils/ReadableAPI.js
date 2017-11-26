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

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPostsOfCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: `${id}`,
      timestamp: `${timestamp}`,
      title: `${title}`,
      body: `${body}`,
      author: `${author}`,
      category: `${category}`,
    }),
  })
    .then(res => res.json())
    .then(data => data);

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const votePost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: `${option}` }),
  })
    .then(res => res.json())
    .then(data => data);

export const editPost = (postId, title, body) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ title: `${title}`, body: `${body}` }),
  })
    .then(res => res.json())
    .then(data => data);

export const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res)
    .then(data => data);

export const getCommentsOfPost = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

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
  })
    .then(res => res.json())
    .then(data => data);

export const getComment = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const voteComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: `${option}` }),
  })
    .then(res => res.json())
    .then(data => data);

export const editComment = (commentId, timestamp, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ timestamp: `${timestamp}`, body: `${body}` }),
  })
    .then(res => res.json())
    .then(data => data);

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res)
    .then(data => data);
