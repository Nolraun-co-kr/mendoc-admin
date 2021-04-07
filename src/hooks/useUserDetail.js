import {useCallback, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {GetOneUser} from "../reducers/users/GetOneUser";
import {useHistory, useParams} from "react-router-dom";


export function useUserDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {userId} = useParams();
  const {userDetail} = useSelector(state => state.users, shallowEqual);

  useEffect(() => {
    dispatch(GetOneUser({id: userId}))
  }, [])

  const onClickToBack = useCallback(() => {
    history.goBack()
  })

  return {
    userDetail,
    onClickToBack
  }
}
