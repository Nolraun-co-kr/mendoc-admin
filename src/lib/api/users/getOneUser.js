import client from "../client";

export const getOneUser = async ({id}) => {
  return client.get(`/users/${id}`)
}
