import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Button, Popconfirm, Table } from 'antd';

import { fetchResources, deleteResource } from '../../../api/resourceApi';

import './ImpressionList.css';

class ImpressionList extends Component {
  state = {
    isLoading: true,
    impressions: [],
  };

  async componentDidMount() {
    this.setState({
      isLoading: false,
      impressions: await fetchResources('impression'),
    });
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Creator',
        dataIndex: 'creator_username',
      },
      {
        title: 'Updated At',
        dataIndex: 'updated_at',
        render: timestamp => <Moment date={timestamp} />,
      },
      {
        title: 'Seal',
        dataIndex: 'seal',
        render: (sealId, impression) => (
          <Link to={`/seal/${sealId}`}>{impression.seal_name}</Link>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'id',
        render: (id, impression) => {
          return (
            <Fragment>
              <Link to={`/impression/${id}`}>
                <Button className="impression-table__button">View</Button>
              </Link>
              {impression.can_edit && (
                <Fragment>
                  <Link
                    to={{
                      pathname: `/impression/${id}/edit`,
                      state: { from: this.props.location },
                    }}
                  >
                    <Button className="impression-table__button" type="primary">
                      Edit
                    </Button>
                  </Link>
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={async () => {
                      if (await deleteResource(id, 'impression')) {
                        this.setState({
                          impressions: _.filter(
                            this.state.impressions,
                            impression => {
                              return impression.id !== id;
                            }
                          ),
                        });
                      }
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button className="impression-table__button" type="danger">
                      Delete
                    </Button>
                  </Popconfirm>
                </Fragment>
              )}
            </Fragment>
          );
        },
      },
    ];

    return (
      <div className="content-body">
        <Table
          className="impression-table"
          columns={columns}
          dataSource={this.state.impressions}
          loading={this.state.isLoading}
          rowClassName="impression-table__row"
          rowKey="id"
        />
      </div>
    );
  }
}

export default ImpressionList;
