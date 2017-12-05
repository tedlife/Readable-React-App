import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import arrSort from '../../utils/arrSort';
import CommentItem from '../common/CommentItem';
import Sort from '../common/Sort';

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

  state = {
    sort: 'latest',
  };

  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { sort } = this.state;
    const { comments } = this.props;

    arrSort(comments, sort);

    return (
      <div>
        <Sort sort={sort} handleSortChange={this.handleSortChange} />
        <ol className="comment-list">
          {comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
        </ol>
      </div>
    );
  }
}

export default CommentList;
