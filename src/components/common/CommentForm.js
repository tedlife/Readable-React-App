import React from 'react';
import { Form, Input, Button } from 'antd';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = '';
  }
  render() {
    return (
      <div className="comment-form">
        <Form>
          <Form.Item label="Name">
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item label="Content">
            <Input.TextArea rows={8} placeholder="Comment Content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Comment
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
