import React from 'react';
import { Form, Input, Button, Radio, Checkbox, Spin, Divider } from 'antd';

import {useUserDetailForm} from '../../hooks/userDetailForm';

const UserForm = () => {
  const [form] = Form.useForm();

  const {userDetail, loading} = useUserDetailForm();

  const alrim_options = [
    { label: '멘독 알림', value: 'alrim_mendoc' },
    { label: 'SNS 알림', value: 'alrim_sns' },
    { label: '리듬이상 알림', value: 'alrim_rhythm' },
    { label: '방해금지 시간 알림', value: 'alrim_Hindrance' },
  ];

  console.log(userDetail)
  return (
    <Spin tip="Loading..." spinning={loading}>
      {!loading && (
        <Form
        form={form}
        layout={'vertical'}
        style={{marginTop: '20px'}}
        onFinish={(v) => {
          console.log(v)
        }}
      >
        <Form.Item 
          label={<strong>비밀번호</strong>} 
          name="password"
          help="비밀번호를 변경하지 않으실 경우, 빈 값으로 남겨주세요."
        >
          <Input placeholder="비밀번호" />
        </Form.Item>

        <Divider />
        <Form.Item label={<strong>닉네임</strong>} name="name" initialValue={userDetail?.name}>
          <Input placeholder="닉네임" />
        </Form.Item>
        <Form.Item 
          label={<strong>연락처</strong>} 
          name="number" 
          initialValue={userDetail?.number}
          help="'-'를 제외한 11자리를 입력해주세요."
        >
          <Input placeholder="연락처" />
        </Form.Item>
        <Form.Item name="petType" label={<strong>펫 타입</strong>} initialValue={userDetail?.petType}>
          <Radio.Group>
            <Radio value="ONE">ONE</Radio>
            <Radio value="TWO">TWO</Radio>
            <Radio value="THREE">THREE</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={<strong>펫 이름</strong>} name="petName" initialValue={userDetail?.petName}>
          <Input placeholder="펫 이름" />
        </Form.Item>
        <Form.Item label={<strong>알림 설정</strong>} name="alrims" >
            <Checkbox.Group options={alrim_options} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
      )}
    </Spin>
  )
};


export default UserForm;