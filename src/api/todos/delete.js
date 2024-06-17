import { baseApiOptions } from "..";

export async function deleteTodo(id) {
  const response = await fetch(`${baseApiOptions.baseUrl}/todos/${id}`, {
    method: "DELETE",
  });
  return response;
}
