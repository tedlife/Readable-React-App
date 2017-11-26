import React from 'react';
import { Form, Input, Select, Button } from 'antd';

class AddPost extends React.Component {
  constructor() {
    super();
    this.state = '';
  }
  render() {
    return (
      <div className="addpost">
        <Form>
          <Form.Item label="Author">
            <Input placeholder="Author Name" />
          </Form.Item>
          <Form.Item label="Title">
            <Input placeholder="Post Title" />
          </Form.Item>
          <Form.Item label="Categary">
            <Select size="default" defaultValue="Redux">
              <Select.Option key="1">Redux</Select.Option>
              <Select.Option key="2">React</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Content">
            <Input.TextArea rows={8} placeholder="Post Content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddPost;
