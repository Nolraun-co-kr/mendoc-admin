import client from "../client";

export const getAllQuickmenus = async () => {
  return client.get(`/quickmenus`)
}
