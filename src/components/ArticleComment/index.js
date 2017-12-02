import React from 'react';

import CommentList from '../CommentList';
import CommentForm from '../common/CommentForm';

function ArticleComment() {
  return (
    <div className="article-comment">
      <h2>Comments</h2>
      <CommentList />
      <CommentForm />
    </div>
  );
}

export default ArticleComment;
