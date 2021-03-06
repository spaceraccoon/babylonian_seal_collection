import React, { Component, Fragment } from 'react';
import { Button, Form, Icon, Input } from 'antd';

import { createResource } from '../../../../../api/resourceApi';
import { signIn } from '../../../../../api/sessionApi';

const FormItem = Form.Item;

/**
 * Sign in form component that either signs in or
 * signs up the user based on the register prop.
 */
class SignInForm extends Component {
  /**
   * Submits form data to corresponding API endpoints.
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        if (this.props.register) {
          await createResource(values, 'user');
        }
        if (await signIn(values)) {
          this.props.setState(() => ({
            redirectToReferrer: true,
          }));
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 8,
                message: 'Please enter at least 8 characters!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        {/**
         * Only display email field for registration.
         */}
        {this.props.register && (
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'Please enter a valid email!',
                },
                {
                  required: true,
                  message: 'Please enter your email!',
                },
              ],
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="email"
                placeholder="Email"
              />
            )}
          </FormItem>
        )}
        <FormItem>
          <Button type="primary" htmlType="submit">
            {this.props.register ? (
              <Fragment>Register</Fragment>
            ) : (
              <Fragment>Sign In</Fragment>
            )}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignInForm = Form.create()(SignInForm);

export default WrappedSignInForm;
