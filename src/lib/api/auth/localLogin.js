import client from "../client";

export const localLogin = async ({email, password}) => {
  return client.post('/auth/local', {email, password})
}
