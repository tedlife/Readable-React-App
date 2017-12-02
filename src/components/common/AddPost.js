import React from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';

import { addPost, getCategories } from '../../actions';

@connect((state) => {
  const { categories } = state.categories;
  return categories ? { categories } : { categories: [] };
}, { addPost, getCategories })
class AddPost extends React.Component {
  static propTypes = {
    addPost: propTypes.func.isRequired,
    getCategories: propTypes.func.isRequired,
    history: propTypes.object.isRequired,
    form: propTypes.object.isRequired,
    categories: propTypes.array.isRequired,
  };

  state = {
    title: '',
    body: '',
    author: '',
    category: '',
  };

  componentDidMount() {
    this.props.getCategories();
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelectChange = (value) => {
    this.setState({
      category: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        const {
          title, body, author, category,
        } = this.state;

        const timestamp = Date.now();
        const postId = uuidv4();
        this.props.addPost(postId, timestamp, title, body, author, category, () => {
          this.props.history.push('/');
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { categories } = this.props;

    return (
      <div className="addpost">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Author" hasFeedback>
            {getFieldDecorator('author', {
              rules: [
                {
                  required: true,
                  message: 'Please input author name!',
                },
              ],
            })(<Input name="author" placeholder="Author Name" onChange={this.handleInputChange} />)}
          </Form.Item>
          <Form.Item label="Title" hasFeedback>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input post title!',
                },
              ],
            })(<Input name="title" placeholder="Post Title" onChange={this.handleInputChange} />)}
          </Form.Item>
          <Form.Item label="Categary" hasFeedback>
            {getFieldDecorator('categary', {
              rules: [
                {
                  required: true,
                  message: 'Please select post categary!',
                },
              ],
            })(<Select size="default" onChange={this.handleSelectChange}>{categories.map(categary => (<Select.Option value={categary.name} key={categary.name}>{categary.name}</Select.Option>))}</Select>)}

          </Form.Item>
          <Form.Item label="Body" hasFeedback>
            {getFieldDecorator('body', {
              rules: [
                {
                  required: true,
                  message: 'Please input post content!',
                },
              ],
            })(<Input.TextArea
              name="body"
              rows={8}
              placeholder="Post Content"
              onChange={this.handleInputChange}
            />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedAddPostForm = Form.create()(AddPost);

export default WrappedAddPostForm;
