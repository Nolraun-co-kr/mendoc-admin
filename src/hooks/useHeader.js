import useGetLocationData from "./useGetLocationData";
import {useLogout} from "./useLogout";
import {useSelector} from "react-redux";


export function useHeader() {
  const {me} = useSelector(state => state.auth);
  const {depth1} = useGetLocationData()
  const {logout} = useLogout();

  return {
    depth1,
    logout,
    me
  }
}
