import { baseApiOptions } from "..";

export const getTodos = async () => {
  const url = `${baseApiOptions.baseUrl}/all_todos`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data received from server:", data);
    return data.body; // Assume that the todos are in the body property
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  return data.body;
};

// export const postTodo = async (todo) => {
//   const response = await fetch(`${baseApiOptions.baseUrl}/todos`, {
//     method: "POST",
//     body: JSON.stringify(todo),
//   });
//   console.log("POST", response);
//   return response;
// };

// export const deleteTodo = async (id) => {
//   const response = await fetch(`${baseApiOptions.baseUrl}/todos/${id}`, {
//     method: "DELETE",
//   });
//   console.log("DELETE", response);
//   return response;
// };
