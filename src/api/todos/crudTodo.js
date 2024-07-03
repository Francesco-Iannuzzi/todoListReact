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
    return data.body;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const addTodoDb = async (todo) => {
  const url = `${baseApiOptions.baseUrl}/add_todo`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todo }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await todo;
    console.log("Data send:", data.text);
    return data.text;
  } catch (error) {
    console.log("dentro il catch");
    console.error("There was a problem with the fetch operation:", error);
  }
};

// export const deleteTodo = async (id) => {
//   const response = await fetch(`${baseApiOptions.baseUrl}/todos/${id}`, {
//     method: "DELETE",
//   });
//   console.log("DELETE", response);
//   return response;
// };
