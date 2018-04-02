import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import SealForm from '../../common/SealForm/SealForm';

const { Content } = Layout;

class SealCreate extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Seal</Breadcrumb.Item>
          <Breadcrumb.Item>Create</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <SealForm />
        </div>
      </Content>
    );
  }
}

export default SealCreate;
