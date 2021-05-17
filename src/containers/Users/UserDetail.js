import React from 'react';
import {PageHeader, Tabs, Button, Descriptions, Layout,} from 'antd';

import UserForm from '../../components/userDetail/UserForm';

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
        ]}
        footer={
          <Tabs defaultActiveKey="1">
          <TabPane tab="기본정보" key="1">
            <UserForm />
          </TabPane>
            <TabPane tab="상태" key="2">
              애완 / 수면시간 / 하루걸음수 / 기분
            </TabPane>
            <TabPane tab="일기" key="3">
              작성 일기
            </TabPane>
            <TabPane tab="반복 일정" key="4">
              반복 일정
            </TabPane>
          </Tabs>
        }
      >
        <Content >
          <Descriptions size="small" column={3} bordered>
            <Descriptions.Item label="고유키">{userDetail?.id}</Descriptions.Item>
            <Descriptions.Item label="이메일">{userDetail?.email}</Descriptions.Item>
            <Descriptions.Item label="가입일시">{dayjs(userDetail?.createdAt).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
            <Descriptions.Item label="마지막 로그인 일시">{dayjs(userDetail?.lastLogin).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
          </Descriptions>
        </Content>
      </PageHeader>

    </div>
  );
};

export default UserDetail;
