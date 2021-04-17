import {useMutation} from "react-query";
import {localLogin} from '../lib/api/auth/localLogin'
import {saveItem} from '../lib/storage';

export function useLogin() {
  const {mutate, error, isLoading} = useMutation(localLogin, {
    onSuccess: ({data}) => {
      console.log(data)
      saveItem('access_token', data.access_token);
      saveItem('refresh_token', data.refresh_token);

      window.location.reload()
    }
  })

  const onFinish = (values) => {
    mutate({
      email: values.email,
      password: values.password
    })
  };

  return {
    onFinish, error, isLoading
  }
}
