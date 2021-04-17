import React from 'react';
import {Alert, Button, Form, Input, Layout} from "antd";
import styled from '@emotion/styled'
import {useLogin} from "../../hooks/useLogin";

const Login = () => {
  const {onFinish, error, isLoading} = useLogin();

  return (
    <AsLayout>
      <FormBox>
        <h2>관리자 사이트 로그인</h2>
        {
          error && (
            <Alert message={error.response.data.message} type="error" showIcon />
          )
        }
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size={'large'}
        >
          <Layout style={{
            width: '400px',
            flexDirection: 'row',
          }}>
            <Layout style={{
              flex: 1
            }}>
              <Form.Item
                style={{margin: 0, marginBottom: '5px'}}
                name="email"
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{margin: 0}}
                name="password"
              >
                <Input.Password />
              </Form.Item>
            </Layout>
            <Layout style={{
              width: '100px',
              flex: 'none',
              marginLeft:' 5px'
            }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={isLoading}
                style={{
                  height: '85px'
                }}>
                로그인
              </Button>
            </Layout>
          </Layout>
        </Form>
      </FormBox>
    </AsLayout>
  );
};

const AsLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
  display: flex !important;
  align-items: center;
  justify-content: center;
`

const FormBox = styled.div`
  width: 100%;
  max-width: 400px;
  
  h2 {
    text-align: center;
  }
  
  & > * + * {
    margin-top: .5em;
  }
`

export default Login;
