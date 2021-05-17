import React from 'react';
import {Table} from 'antd';

const ListTable = ({ data = [], loading = false, meta, onChangePagination, columns}) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      // disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  }

  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection
      }}
      expandable={{
        expandedRowRender: record => <p style={{ margin: 0 }}><strong>고유키</strong>: {record.id}</p>,
        rowExpandable: record => record.name !== 'Not Expandable',
      }}
      columns={columns}
      rowKey={row => row.id}
      dataSource={data}
      pagination={{
        current: meta?.page,
        pageSize: meta?.take,
        total: meta?.search_count
      }}
      loading={loading}
      onChange={onChangePagination}
    />
  );
};

export default ListTable;
