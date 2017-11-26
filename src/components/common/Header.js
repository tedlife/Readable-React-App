import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Menu } from 'antd';

const { Header } = Layout;

class SiteHeader extends React.Component {
  constructor() {
    super();
    this.state = '';
  }

  render() {
    return (
      <Header className="header">
        <div className="logo">
          <Link to="/">READABLE</Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
        <Link to="/addpost">
          <Button icon="plus" type="primary" size="large">
            Add a Post
          </Button>
        </Link>
      </Header>
    );
  }
}

export default SiteHeader;
