import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

class Sider extends React.Component {
  constructor() {
    super();
    this.state = '';
  }
  render() {
    return (
      <Layout.Sider>
        <Menu defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">All</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/categary/React">React</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/categary/Redux">Redux</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/categary/Udacity">Udacity</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sider;
