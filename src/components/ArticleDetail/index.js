import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Article from '../common/Article';
import CommentList from '../CommentList';
import CommentForm from '../common/CommentForm';

import { getPost, getCommentsInPost } from '../../actions';

@connect(
  (state) => {
    const { post } = state.posts;
    return {
      post: { ...post },
    };
  },
  { getPost, getCommentsInPost },
)
class ArticleDetail extends React.Component {
  static propTypes = {
    match: propTypes.object.isRequired,
    getPost: propTypes.func.isRequired,
    getCommentsInPost: propTypes.func.isRequired,
    post: propTypes.object.isRequired,
    history: propTypes.object.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getCommentsInPost(id);
  }

  render() {
    const { post, history } = this.props;
    const { path } = this.props.match;

    if (post.error) return <Redirect from="*" to="/404" />;
    return (
      <div className="article-detail">
        <Article post={post} history={history} path={path} />
        <div className="article-comment">
          <h2>Comments</h2>
          <CommentList />
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default ArticleDetail;
