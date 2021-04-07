import React from 'react';
import Highlighter from 'react-highlight-words';
import {Button, Input, Space, Table} from 'antd';
import dayjs from 'dayjs';
import {SearchOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

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
        current: meta?.currentPage,
        pageSize: meta?.itemsPerPage,
        total: meta?.totalItems
      }}
      loading={loading}
      onChange={onChangePagination}
    />
  );
};

export default ListTable;