import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

import { editPost } from '../../actions';

@connect(null, { editPost })
class EditPost extends React.Component {
  static propTypes = {
    editPost: propTypes.func.isRequired,
    post: propTypes.object.isRequired,
    visible: propTypes.bool.isRequired,
    closeModal: propTypes.func.isRequired,
  };

  state = {
    title: '',
    body: '',
    visible: false,
    confirmLoading: false,
  };

  componentWillReceiveProps(nextProps) {
    const { visible, post } = nextProps;
    this.setState({
      visible,
      title: post.title,
      body: post.body,
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });

    const { title, body } = this.state;
    const { post } = this.props;
    this.props.editPost(post.id, title, body, () => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
      this.props.closeModal(false);
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    this.props.closeModal(false);
  };

  render() {
    const {
      visible, confirmLoading, title, body,
    } = this.state;
    return (
      <Modal
        title="Title"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <Form>
          <Form.Item label="Title" hasFeedback>
            <Input
              value={title}
              name="title"
              placeholder="Post Title"
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Body" hasFeedback>
            <Input.TextArea
              value={body}
              name="body"
              rows={8}
              placeholder="Post Content"
              onChange={this.handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default EditPost;
