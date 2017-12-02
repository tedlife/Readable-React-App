import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import propTypes from 'prop-types';

import timestampToDate from '../../utils/timestamp';

@connect()
class CommentItem extends React.Component {
  static propTypes = {
    comment: propTypes.object.isRequired,
  };

  render() {
    const { comment } = this.props;
    return (
      <li className="comment-item">
        <div className="comment-body">
          <div className="comment-meta">
            <span className="comment-author">{comment.author}</span>
            <span className="comment-metadata">{timestampToDate(comment.timestamp)}</span>
            <span className="comment-metadata">
              <Button.Group>
                <Button type="primary" icon="edit" size="small" ghost />
                <Button type="primary" icon="delete" size="small" ghost />
              </Button.Group>
            </span>
          </div>
          <div className="comment-content">{comment.body}</div>
          <div className="comment-vote">
            <Button type="primary" icon="like" size="small" ghost />
            <span>{comment.voteScore}</span>
            <Button type="primary" icon="dislike" size="small" ghost />
          </div>
        </div>
      </li>
    );
  }
}

export default CommentItem;
