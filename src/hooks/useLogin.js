import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import {PostLocalLogin} from '../reducers/auth/PostLocalLogin';

export function useLogin() {
  const dispatch = useDispatch();
  const {authError} = useSelector(state => state.auth);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if(authError?.data?.message) {
      api.warning({
        message: "로그인 에러!",
        description: authError?.data?.message,
        placement: 'topRight',
      });
    }
  }, [authError])

  const onFinish = useCallback((values) => {
    dispatch(PostLocalLogin(values))
  }, []);

  return {
    onFinish,
    contextHolder
  }
}
