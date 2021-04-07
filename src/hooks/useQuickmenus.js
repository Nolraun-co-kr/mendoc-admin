import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetAllQuickmenus} from "../reducers/quickmenus/GetAllQuickMenus";
import {useHistory} from "react-router-dom";


export function useQuickmenus() {
  const dispatch = useDispatch();
  const {quickmenus} = useSelector(state => state.quickmenus)

  console.log(1)
  useEffect(() => {
    dispatch(GetAllQuickmenus());
  }, [])

  return {
    quickmenus,
    hostUrl: window.location.host
  }
}
