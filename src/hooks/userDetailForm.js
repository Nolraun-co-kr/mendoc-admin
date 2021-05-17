import { useSelector } from "react-redux";


export function useUserDetailForm() {
  const { userDetail, loading } = useSelector(state => state.users);

  
  return {
    userDetail,
    loading
  }
}