import React from 'react';
import {PageHeader, Tabs, Button, Statistic, Descriptions, Layout,} from 'antd';

import {useUserDetail} from "../../hooks/useUserDetail";
import dayjs from "dayjs";
const {TabPane} = Tabs;
const {Content} = Layout;

const UserDetail = () => {
  const {userDetail, onClickToBack} = useUserDetail()

  return (
    <div>

      <PageHeader
        className="site-page-header-responsive"
        title={userDetail?.username}
        extra={[
          <Button key="back" onClick={onClickToBack}>뒤로가기</Button>,
          <Button key="1" type="primary">
            저장
          </Button>,
        ]}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="프로젝트" key="1" />
            <TabPane tab="결제내역" key="2" />
          </Tabs>
        }
      >
        <Content >
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="고유키">{userDetail?.id}</Descriptions.Item>
            <Descriptions.Item label="이메일">{userDetail?.email}</Descriptions.Item>
            <Descriptions.Item label="가입일">{dayjs(userDetail?.createdAt).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
          </Descriptions>
        </Content>
      </PageHeader>

    </div>
  );
};

export default UserDetail;
