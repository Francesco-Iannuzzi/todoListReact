import { baseApiOptions } from "..";

export const deleteTodo = async (id) => {
  const response = await fetch(`${baseApiOptions.baseUrl}/todos/${id}`, {
    method: "DELETE",
  });
  return response;
};
