import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Article from '../common/Article';
import ArticleComment from '../ArticleComment';

@connect()
class ArticleDetail extends React.Component {
  static propTypes = {
    match: propTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = '';
  }

  render() {
    const { path } = this.props.match;
    return (
      <div className="article-detail">
        <Article path={path} />
        <ArticleComment />
      </div>
    );
  }
}

export default ArticleDetail;
