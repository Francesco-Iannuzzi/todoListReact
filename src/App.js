import React, {useState} from "react";

// components
import TodoList from "./TodoList"

export default function App() {
    return (
        <>
            <main className="container">
                <TodoList />
            </main> 
        </>
    )
}