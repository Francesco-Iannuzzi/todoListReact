import React, { createContext, useState } from "react";

const TodoContext = createContext();


export  function TodoProvider({children}) {
    const [state, setState] = React.useState({
        todos: [],
        theme: 'light'
    })
    
    function addTodo(todo) {
        setState((prev) => ({
            ...prev,
            todos: [...prev.todos, todo]
        }));
    }
    
    function removeTodo(index) {
        setState((prev) => ({
            ...prev,
            todos: prev.todos.filter((_, i) => i !== index)
        }));
    }

    function changeTheme(color){
        setState((prev) => ({
            ...prev,
            theme: color
        }))
    }

    // function handleClick() {
    //     let bodyStyle = document.body.style;
    //     if (bodyStyle.backgroundColor === 'black') {
    //       bodyStyle.backgroundColor = 'white';
    //       bodyStyle.color = 'black';
    //     } else {
    //       bodyStyle.backgroundColor = 'black';
    //       bodyStyle.color = 'white';
    //     }
    // }

    return (
        <TodoContext.Provider  value={{...state, addTodo, removeTodo, changeTheme}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;