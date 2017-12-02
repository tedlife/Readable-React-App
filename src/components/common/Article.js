import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import propTypes from 'prop-types';

import EditPost from './EditPost';
import timestampToDate from '../../utils/timestamp';
import { votePost, deletePost } from '../../actions';

@connect(null, { votePost, deletePost })
class Article extends React.Component {
  static propTypes = {
    path: propTypes.string.isRequired,
    post: propTypes.object.isRequired,
    votePost: propTypes.func.isRequired,
    deletePost: propTypes.func.isRequired,
    history: propTypes.object.isRequired,
  };

  state = {
    visible: false,
  };

  handleVote = (e) => {
    const { id } = this.props.post;
    const option = e.target.value;
    const { path } = this.props;
    this.props.votePost(id, option, path);
  };

  handleDelete = () => {
    const postId = this.props.post.id;
    this.props.deletePost(postId, () => {
      this.props.history.push('/');
    });
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
    const { path, post } = this.props;
    const { visible } = this.state;
    return (
      <div className="article">
        <div className="article-header">
          <div className="article-vote">
            <Button type="primary" value="upVote" ghost onClick={this.handleVote}>
              <Icon type="like" />
            </Button>
            <span>{post.voteScore}</span>
            <Button type="primary" value="downVote" ghost onClick={this.handleVote}>
              <Icon type="dislike" />
            </Button>
          </div>
          <div className="article-main">
            {path === '/:category/:id' ? (
              <h2 className="article-title">{post.title}</h2>
            ) : (
              <Link to={`/${post.category}/${post.id}`}>
                <h2 className="article-title">{post.title}</h2>
              </Link>
            )}
          </div>
          <div className="article-meta">
            <span className="author">
              <Icon type="user" /> {post.author}
            </span>
            <span className="cat">
              <Icon type="folder" /> {post.category}
            </span>
            <span className="time">
              <Icon type="calendar" /> {timestampToDate(post.timestamp)}
            </span>
            <span className="comment">
              <Icon type="message" /> {post.commentCount}
            </span>
          </div>
        </div>
        {path === '/:category/:id' ? (
          <div className="article-content">
            {post.body}
            <div className="manage">
              <Button.Group>
                <Button type="primary" icon="edit" ghost onClick={this.showModal}>
                  Edit
                </Button>
                <Button type="primary" icon="delete" ghost onClick={this.handleDelete}>
                  Delete
                </Button>
              </Button.Group>
            </div>
          </div>
        ) : (
          ''
        )}
        <EditPost visible={visible} closeModal={bool => this.closeModal(bool)} post={post} />
      </div>
    );
  }
}

export default Article;
