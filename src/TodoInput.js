import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState('')
  // console.log('inpunt Value = ', inputValue);
  // console.log('set input Value = ', setInputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  }

  return (
    <>
      <form className="mb-3 d-flex mt-4 gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control w-25"
          value={inputValue}
          id="add_text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new Item"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  )
}