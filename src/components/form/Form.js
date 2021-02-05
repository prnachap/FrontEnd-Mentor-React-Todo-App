import React, { useState, useContext } from "react";
import TodoContext from "../../context/todo/TodoContext";
import "./form.scss";

const Form = () => {
  const [input, setInput] = useState("");
  const todoContext = useContext(TodoContext);
  const { addItem } = todoContext;

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      addItem({ title: input, status: "active" });
    }
    setInput("");
  };

  return (
    <form className="form container" onSubmit={onFormSubmit}>
      <div className="form__group">
        <div className="form__circle"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="form__input"
          onChange={onInputChange}
          value={input}
        />
      </div>
    </form>
  );
};

export default Form;
