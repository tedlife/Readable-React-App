import React from 'react';

import CommentItem from '../common/CommentItem';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = '';
  }
  render() {
    return (
      <ol className="comment-list">
        <CommentItem />
      </ol>
    );
  }
}

export default CommentList;
