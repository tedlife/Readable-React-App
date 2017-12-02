import React from 'react';
import { connect } from 'react-redux';
import { Layout, Radio } from 'antd';
import propTypes from 'prop-types';
import sortBy from 'sort-by';

import Article from '../common/Article';
import Sider from '../common/Sider';

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

    if (sort === 'latest') {
      allPosts.sort(sortBy('-timestamp', '-voteScore'));
    } else if (sort === 'votes') {
      allPosts.sort(sortBy('-voteScore', '-timestamp'));
    } else if (sort === 'oldest') {
      allPosts.sort(sortBy('timestamp', '-voteScore'));
    }

    return (
      <Layout>
        <Sider currentCategory={currentCategory} />
        <Layout.Content>
          <div className="sort">
            <span>Sort by: </span>
            <Radio.Group value={sort} onChange={this.handleSortChange}>
              <Radio.Button value="latest">Latest</Radio.Button>
              <Radio.Button value="votes">Votes</Radio.Button>
              <Radio.Button value="oldest">Oldest</Radio.Button>
            </Radio.Group>
          </div>
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
