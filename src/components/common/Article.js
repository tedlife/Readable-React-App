import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import propTypes from 'prop-types';

@connect()
class Article extends React.Component {
  static propTypes = {
    path: propTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = '';
  }

  render() {
    const { path } = this.props;
    return (
      <div className="article">
        <div className="article-header">
          <div className="article-vote">
            <Button type="primary" ghost>
              <Icon type="like" />
            </Button>
            <span>12</span>
            <Button type="primary" ghost>
              <Icon type="dislike" />
            </Button>
          </div>
          <div className="article-main">
            {path === '/:id' ? (
              <h2 className="article-title">Post Title</h2>
            ) : (
              <Link to="/12">
                <h2 className="article-title">Post Title</h2>
              </Link>
            )}
          </div>
          <div className="article-meta">
            <span className="author">
              <Icon type="user" /> ted
            </span>
            <span className="time">
              <Icon type="calendar" /> 2017-11-11
            </span>
            <span className="comment">
              <Icon type="message" /> 2
            </span>
          </div>
        </div>
        {path === '/:id' ? (
          <div className="article-content">
            <p>文章内容</p>
            <div className="manage">
              <Button.Group>
                <Button type="primary" icon="edit" ghost>
                  Edit
                </Button>
                <Button type="primary" icon="delete" ghost>
                  Delete
                </Button>
              </Button.Group>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Article;
