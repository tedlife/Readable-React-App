import React from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;

function SiteFooter() {
  return (
    <Footer>
      <a href="https://github.com/tedlife" target="_blank" rel="noopener noreferrer">
        <Icon type="github" /> READABLE Github
      </a>
    </Footer>
  );
}

export default SiteFooter;
