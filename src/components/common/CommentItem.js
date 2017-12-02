import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import propTypes from 'prop-types';

import timestampToDate from '../../utils/timestamp';
import { voteComment, deleteComment } from '../../actions';

import EditComment from './EditComment';

@connect(null, { voteComment, deleteComment })
class CommentItem extends React.Component {
  static propTypes = {
    comment: propTypes.object.isRequired,
    deleteComment: propTypes.func.isRequired,
    voteComment: propTypes.func.isRequired,
  };

  state = {
    visible: false,
  };

  handleVote = (e) => {
    const { id } = this.props.comment;
    const option = e.target.value;
    this.props.voteComment(id, option);
  };

  handleDelete = () => {
    const commentId = this.props.comment.id;
    this.props.deleteComment(commentId);
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = (bool) => {
    this.setState({
      visible: bool,
    });
  };

  render() {
    const { comment } = this.props;
    const { visible } = this.state;
    return (
      <li className="comment-item">
        <div className="comment-body">
          <div className="comment-meta">
            <span className="comment-author">{comment.author}</span>
            <span className="comment-metadata">{timestampToDate(comment.timestamp)}</span>
            <span className="comment-metadata">
              <Button.Group>
                <Button type="primary" icon="edit" size="small" ghost onClick={this.showModal} />
                <Button
                  type="primary"
                  icon="delete"
                  size="small"
                  ghost
                  onClick={this.handleDelete}
                />
              </Button.Group>
            </span>
          </div>
          <div className="comment-content">{comment.body}</div>
          <div className="comment-vote">
            <Button
              value="upVote"
              type="primary"
              icon="like"
              size="small"
              ghost
              onClick={this.handleVote}
            />
            <span>{comment.voteScore}</span>
            <Button
              value="downVote"
              type="primary"
              icon="dislike"
              size="small"
              ghost
              onClick={this.handleVote}
            />
          </div>
        </div>
        <EditComment
          comment={comment}
          visible={visible}
          closeModal={bool => this.closeModal(bool)}
        />
      </li>
    );
  }
}

export default CommentItem;
