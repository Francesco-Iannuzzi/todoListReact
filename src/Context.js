import React, { createContext, useState } from "react";

const TodoContext = createContext();


export function TodoProvider({children}) {
    const [state, setState] = useState({
        todos: {},
        theme: 'light'
    })
    
    function addTodo(todo) {
        const id = new Date().getTime().toString();
        setState((prev) => ({
            ...prev,
            todos: {
                ...prev.todos,
                [id]: { 
                    text: todo, 
                    completed: false 
                } 
            }
        }));
    }
    
    function removeTodo(id) {
        const newTodos = { ...state.todos };
        delete newTodos[id];
        setState((prev) => ({
            ...prev,
            todos: newTodos
        }));
    }

    function toggleComplete(id) {
        setState((prev) => ({
            ...prev,
            todos: {
                ...prev.todos,
                [id]: { 
                    ...prev.todos[id], 
                    completed: !prev.todos[id].completed 
                }
            }
        }));
    }

    function changeTheme(color) {
        setState((prev) => ({
            ...prev,
            theme: color
        }));
    }

    return (
        <TodoContext.Provider value={{ ...state, addTodo, removeTodo, toggleComplete, changeTheme }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;