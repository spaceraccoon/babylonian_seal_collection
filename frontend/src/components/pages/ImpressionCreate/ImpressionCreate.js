import React, { Component } from 'react';
import ImpressionForm from '../../common/ImpressionForm/ImpressionForm';

/**
 * Page that displays an impression creation form.
 */
class ImpressionCreate extends Component {
  render() {
    return (
      <div className="content-body">
        <h1>Create Impression</h1>
        <ImpressionForm {...this.props} />
      </div>
    );
  }
}

export default ImpressionCreate;
