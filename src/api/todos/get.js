import { baseApiOptions } from "..";

export const getTodos = async () => {
  const response = await fetch(`${baseApiOptions.baseUrl}/todos`, {
    method: "GET",
  });
  return await response.json();
};
