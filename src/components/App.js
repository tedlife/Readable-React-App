import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import SiteHeader from './common/Header';
import SiteFooter from './common/Footer';
import AddPost from './common/AddPost';
import SiteAticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

function App() {
  return (
    <Layout>
      <SiteHeader />
      <Layout.Content>
        <Switch>
          <Route path="/" exact component={SiteAticleList} />
          <Route path="/category/:category" exact component={SiteAticleList} />
          <Route path="/addpost" exact component={AddPost} />
          <Route path="/:category/:id" exact component={ArticleDetail} />
        </Switch>
      </Layout.Content>
      <SiteFooter />
    </Layout>
  );
}

export default App;
