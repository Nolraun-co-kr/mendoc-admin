import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {PostLocalLogin} from "../reducers/auth/PostLocalLogin";

export function useLogin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const onSubmit = useCallback(({email, password}) => {
    dispatch(PostLocalLogin({ email, password }))
  }, [])

  return {
    loading,
    onSubmit
  }
}
