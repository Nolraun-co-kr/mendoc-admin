import React from 'react';
import {Statistic, Row, Col, Card, Alert} from 'antd';
import {useUserList} from "../../hooks/useUserList";
import ListTable from "../../components/listPage/ListTable";

const UserList = () => {
  const {loading, users, meta, handleChangePagination, columns} = useUserList({limit: 10, page: 1})

  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.totalItems} loading={loading} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.totalItems} loading={loading} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.totalItems} loading={loading} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.totalItems} loading={loading} />
          </Card>
        </Col>
      </Row>

      <Alert
        message={`검색된 회원 수 ${meta?.totalItems}`}
        type="info"
        style={{margin: '20px 0 10px'}}
      />
      <ListTable
        data={users}
        loading={loading}
        meta={meta}
        onChangePagination={handleChangePagination}
        columns={columns}
      />
    </div>
  );
};

export default UserList;
