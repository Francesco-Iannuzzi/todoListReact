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
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const newTodo = await response.json();
    return { response, newTodo };
    // catch error
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

// delete todo item
export const deleteTodoDb = async (id) => {
  // recover url
  const url = `${baseApiOptions.baseUrl}/delete_todo/${id}`;

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
    return data;

    // catch error
  } catch (error) {
    console.log(error);
  }
};

// complete todo item status
export const toggleTodoCompletedDb = async (id, completed, isEditing) => {
  const url = `${baseApiOptions.baseUrl}/toggle_todo`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, completed, isEditing }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

// change to isEditing
export const isEditingTodoDb = async (id, isEditing) => {
  const url = `${baseApiOptions.baseUrl}/edit_todo`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, isEditing }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

// update todo text
export const updateTodoTextDb = async (id, text) => {
  const url = `${baseApiOptions.baseUrl}/edit_todo_text`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, text }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
