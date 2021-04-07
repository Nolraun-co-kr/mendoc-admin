import client from "../client";

export const getAllUser = async (query) => {
  return client.get(`/users?${query}`)
}
