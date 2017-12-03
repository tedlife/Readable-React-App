import React from 'react';
import { Form, Input, Modal } from 'antd';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { editComment } from '../../actions';

@connect(null, { editComment })
class EditComment extends React.Component {
  static propTypes = {
    editComment: propTypes.func.isRequired,
    closeModal: propTypes.func.isRequired,
    comment: propTypes.object.isRequired,
    visible: propTypes.bool.isRequired,
  };

  state = {
    body: '',
    visible: false,
    confirmLoading: false,
  };

  componentWillReceiveProps(nextProps) {
    const { visible, comment } = nextProps;
    this.setState({
      visible,
      body: comment.body,
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

    const { body } = this.state;
    const timestamp = Date.now();
    const { id } = this.props.comment;

    this.props.editComment(id, timestamp, body, () => {
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
    const { visible, confirmLoading, body } = this.state;
    return (
      <Modal
        title="Edit The Comment"
        okText="Confirm"
        cancelText="Cancel"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <Form>
          <Form.Item label="Content">
            <Input.TextArea
              value={body}
              rows={8}
              placeholder="Comment Content"
              name="body"
              onChange={this.handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default EditComment;
