import React, { Component } from 'react';
import { Form, Select } from 'antd';

import { formItemLayout } from '../../../data/formLayouts';

const FormItem = Form.Item;
const { Option } = Select;

/**
 * Form field for multi-select (ManyToMany) data. Unlike the TagsField
 * component, it does not allow the creation of new nested objects/options.
 */
class MultiSelectField extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem {...formItemLayout} label={this.props.label}>
        {getFieldDecorator(this.props.field, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [],
          initialValue: [],
        })(
          <Select showSearch mode="multiple" style={{ width: '100%' }}>
            {this.props.options.map(option => (
              <Option
                key={option.id}
                value={option.id}
                /**
                 * In cases like related_seals, a seal should not be able to
                 * select itself as a related seal.
                 */
                disabled={
                  this.props.excludeSelf && option.id === this.props.excludeSelf
                }
              >
                {option.name}
              </Option>
            ))}
          </Select>
        )}
      </FormItem>
    );
  }
}

export default MultiSelectField;
