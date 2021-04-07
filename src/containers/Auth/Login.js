import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {Button, Form, Input, Layout} from "antd";
import {useLogin} from "../../hooks/useLogin";

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const {onSubmit, loading} = useLogin();

  return (
    <Layout style={{
      width: `100vw`,
      height: `100vh`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <h2>관리자 사이트 로그인</h2>
      <Form
        initialValues={{ remember: true }}
        onFinish={handleSubmit(onSubmit)}
        size={'large'}
      >
        <Layout style={{
          width: '400px',
          flexDirection: 'row',
        }}>
          <Layout style={{
            flex: 1
          }}>
            <Form.Item style={{margin: 0, marginBottom: '5px'}}>
              <Controller
                name="email"
                control={control}
                defaultValue={''}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: true
                }}
              />
              {errors.email && <span>이메일을 입력해주세요.</span>}
            </Form.Item>
            <Form.Item style={{margin: 0}}>
              <Controller
                name="password"
                control={control}
                defaultValue={''}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: true
                }}
              />
              {errors.password && <span>비밀번호를 입력해주세요.</span>}
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
              loading={loading}
              style={{
                height: '85px'
              }}>
              로그인
            </Button>
          </Layout>
        </Layout>
      </Form>
    </Layout>
  );
};

export default Login;
