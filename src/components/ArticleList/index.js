import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import propTypes from 'prop-types';

import arrSort from '../../utils/arrSort';
import Article from '../common/Article';
import Sider from '../common/Sider';
import Sort from '../common/Sort';

import { getPosts, getCategories, getPostsInCategory } from '../../actions';

@connect(
  (state) => {
    const { posts } = state;
    const postsInCategory = state.categories.posts;
    return {
      posts: Object.keys(posts).reduce(
        (accumulator, currentValue) => [...accumulator, posts[currentValue]],
        [],
      ),
      postsInCategory: postsInCategory || [],
    };
  },
  { getPosts, getCategories, getPostsInCategory },
)
class SiteAticleList extends React.Component {
  static propTypes = {
    match: propTypes.object.isRequired,
    posts: propTypes.array.isRequired,
    postsInCategory: propTypes.array.isRequired,
    getPosts: propTypes.func.isRequired,
    getCategories: propTypes.func.isRequired,
    getPostsInCategory: propTypes.func.isRequired,
    history: propTypes.object.isRequired,
  };

  state = {
    sort: 'latest',
  };

  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path === '/category/:category') {
      const { category } = nextProps.match.params;
      nextProps.getPostsInCategory(category);
    }
  }

  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { sort } = this.state;
    const { history } = this.props;
    const { path } = this.props.match;
    const currentCategory = this.props.match.params.category || 'all';
    let allPosts;
    if (this.props.match.path === '/category/:category') {
      allPosts = this.props.postsInCategory;
    } else {
      allPosts = this.props.posts;
    }

    arrSort(allPosts, sort);

    return (
      <Layout>
        <Sider currentCategory={currentCategory} />
        <Layout.Content>
          <Sort sort={sort} handleSortChange={this.handleSortChange} />
          <div className="articles">
            {allPosts.map(post => (
              <Article key={post.id} post={post} history={history} path={path} />
            ))}
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

export default SiteAticleList;
