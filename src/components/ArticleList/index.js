import React from 'react';
import { connect } from 'react-redux';
import { Layout, Radio } from 'antd';
import propTypes from 'prop-types';

import Article from '../common/Article';
import Sider from '../common/Sider';

@connect()
class SiteAticleList extends React.Component {
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
      <Layout>
        <Sider />
        <Layout.Content>
          <div className="sort">
            <span>Sort by: </span>
            <Radio.Group value="Latest">
              <Radio.Button value="latest">Latest</Radio.Button>
              <Radio.Button value="votes">Votes</Radio.Button>
              <Radio.Button value="oldest">Oldest</Radio.Button>
            </Radio.Group>
          </div>
          <div className="articles">
            <Article path={path} />
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

export default SiteAticleList;
