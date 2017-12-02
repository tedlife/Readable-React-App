import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Article from '../common/Article';
import ArticleComment from '../ArticleComment';

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
    this.props.getPost(this.props.match.params.id);
    this.props.getCommentsInPost(this.props.match.params.id);
  }

  render() {
    const { post, history } = this.props;
    const { path } = this.props.match;
    return (
      <div className="article-detail">
        <Article post={post} history={history} path={path} />
        <ArticleComment />
      </div>
    );
  }
}

export default ArticleDetail;
