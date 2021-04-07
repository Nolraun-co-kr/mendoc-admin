import {useDispatch, useSelector} from "react-redux";
import {loadItem} from '../lib/storage';
import {setToken} from '../reducers/auth';
import {useEffect} from "react";
import {GetMe} from "../reducers/auth/GetMe";

export function useLoggedIn() {
  const dispatch = useDispatch();
  const {loggedIn, userId} = useSelector(state => state.auth);

  const access_token = loadItem('access_token');

  useEffect(() => {
    if(loggedIn) {
      dispatch(GetMe({id: userId}))
    } else {
      access_token && dispatch(setToken({
        access_token
      }));
    }
  }, [loggedIn])

  return {
    loggedIn,
  }
}
