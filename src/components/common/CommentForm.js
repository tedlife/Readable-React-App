import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { addComment, getPost } from '../../actions';

@connect(
  (state) => {
    const { posts } = state;
    return {
      post: posts.post || {},
    };
  },
  { addComment, getPost },
)
class CommentForm extends React.Component {
  static propTypes = {
    addComment: propTypes.func.isRequired,
    form: propTypes.object.isRequired,
    post: propTypes.object.isRequired,
    getPost: propTypes.func.isRequired,
  };

  state = {
    author: '',
    body: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        const { body, author } = this.state;

        const timestamp = Date.now();
        const id = uuidv4();
        const parentId = this.props.post.id;
        this.props.addComment(id, timestamp, body, author, parentId, () => {
          this.props.form.resetFields(['author', 'body']);
          this.props.getPost(parentId);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="comment-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator('author', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input placeholder="Your Name" name="author" onChange={this.handleInputChange} />)}
          </Form.Item>
          <Form.Item label="Content">
            {getFieldDecorator('body', {
              rules: [
                {
                  required: true,
                  message: 'Please input comment content!',
                },
              ],
            })(<Input.TextArea
              rows={8}
              placeholder="Comment Content"
              name="body"
              onChange={this.handleInputChange}
            />)}
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

const WrappedCommentForm = Form.create()(CommentForm);

export default WrappedCommentForm;
