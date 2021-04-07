import {useLoggedIn} from "./useLoggedIn";


export function useApp() {
  const {loggedIn} = useLoggedIn()

  return {
    loggedIn,
  }
}
