import React from 'react';
import {Statistic, Row, Col, Card, Alert} from 'antd';
import {useUserList} from "../../hooks/useUserList";
import ListTable from "../../components/listPage/ListTable";

const UserList = () => {
  const {loading, users, meta, handleChangePagination, columns} = useUserList()

  return (
    <div>

    <Alert
      message={`전체 회원수: ${meta?.total_count} | 검색된 회원수: ${meta?.search_count}`}
      type="info"
      style={{margin: '0px 0 10px'}}
    />
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.total_count} loading={loading} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.total_count} loading={loading} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.total_count} loading={loading} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="전체 회원수" value={meta?.total_count} loading={loading} />
          </Card>
        </Col>
      </Row>
      <br/>
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
