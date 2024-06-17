import { baseApiOptions } from "..";

export const postTodo = async (todo) => {
  const response = await fetch(`${baseApiOptions.baseUrl}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
  });
  console.log(response);
  return response;
};
