import React from 'react';
import { Button } from 'antd';

class CommentItem extends React.Component {
  constructor() {
    super();
    this.state = '';
  }
  render() {
    return (
      <li className="comment-item">
        <div className="comment-body">
          <div className="comment-meta">
            <span className="comment-author">ted</span>
            <span className="comment-metadata">2016-09-28</span>
            <span className="comment-metadata">
              <Button.Group>
                <Button type="primary" icon="edit" size="small" ghost />
                <Button type="primary" icon="delete" size="small" ghost />
              </Button.Group>
            </span>
          </div>
          <div className="comment-content">
            <p>Hello World</p>
          </div>
          <div className="comment-vote">
            <Button type="primary" icon="like" size="small" ghost />
            <span>2</span>
            <Button type="primary" icon="dislike" size="small" ghost />
          </div>
        </div>
      </li>
    );
  }
}

export default CommentItem;
