import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import SiteHeader from './common/Header';
import SiteFooter from './common/Footer';
import AddPost from './common/AddPost';
import NotFound from './common/404';
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
          <Route path="/404" exact component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout.Content>
      <SiteFooter />
    </Layout>
  );
}

export default App;
