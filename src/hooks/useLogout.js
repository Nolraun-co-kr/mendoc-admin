import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {logout as logoutReducer} from "../reducers/auth";

export function useLogout() {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(logoutReducer())
  }, [])

  return {
    logout
  }
}
