import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import CommentItem from '../common/CommentItem';

@connect((state) => {
  const { comments } = state;
  return {
    comments: Object.keys(comments).reduce((accumulator, currentValue) => {
      if (comments[currentValue].deleted) {
        return [...accumulator];
      }
      return [...accumulator, comments[currentValue]];
    }, []),
  };
})
class CommentList extends React.Component {
  static propTypes = {
    comments: propTypes.array.isRequired,
  };

  render() {
    const { comments } = this.props;
    return (
      <ol className="comment-list">
        {comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
      </ol>
    );
  }
}

export default CommentList;
