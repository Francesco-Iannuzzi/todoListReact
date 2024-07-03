import { baseApiOptions } from "..";

// get todo item

export const getTodos = async () => {
  // recover url
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

    // catch error
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

// add todo item

export const addTodoDb = async (todo) => {
  // recover url
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

    // catch error
  } catch (error) {
    console.log("dentro il catch");
    console.error("There was a problem with the fetch operation:", error);
  }
};

// delete todo item

export const deleteTodoDb = async (id) => {
  // recover url
  const url = `${baseApiOptions.baseUrl}/delete_todo/:id`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await id;
    console.log("Data delete:", data._id);
    return data._id;

    // catch error
  } catch (error) {
    console.log(error);
  }
};
