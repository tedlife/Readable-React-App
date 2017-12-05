import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Radio } from 'antd';
import sortBy from 'sort-by';

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

  state = {
    sort: 'latest',
  };

  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { sort } = this.state;
    const { comments } = this.props;

    if (sort === 'latest') {
      comments.sort(sortBy('-timestamp', '-voteScore'));
    } else if (sort === 'votes') {
      comments.sort(sortBy('-voteScore', '-timestamp'));
    } else if (sort === 'oldest') {
      comments.sort(sortBy('timestamp', '-voteScore'));
    }
    return (
      <div>
        <div className="sort">
          <span>Sort by: </span>
          <Radio.Group value={sort} onChange={this.handleSortChange}>
            <Radio.Button value="latest">Latest</Radio.Button>
            <Radio.Button value="votes">Votes</Radio.Button>
            <Radio.Button value="oldest">Oldest</Radio.Button>
          </Radio.Group>
        </div>
        <ol className="comment-list">
          {comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
        </ol>
      </div>
    );
  }
}

export default CommentList;
