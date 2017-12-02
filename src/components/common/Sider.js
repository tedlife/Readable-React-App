import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

@connect((state) => {
  const { categories } = state.categories;
  return categories ? { categories } : { categories: [] };
})
class Sider extends React.Component {
  static propTypes = {
    categories: propTypes.array.isRequired,
    currentCategory: propTypes.string.isRequired,
  };

  render() {
    const { categories, currentCategory } = this.props;
    return (
      <Layout.Sider>
        <Menu selectedKeys={[currentCategory]}>
          <Menu.Item key="all">
            <Link to="/">All</Link>
          </Menu.Item>
          {categories.map(category => (
            <Menu.Item key={category.name}>
              <Link to={`/category/${category.name}`}>{category.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sider;
