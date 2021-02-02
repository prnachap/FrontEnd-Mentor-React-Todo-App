import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <form className="form container">
      <div className="form__group">
        <div className="form__circle"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="form__input"
        />
      </div>
    </form>
  );
};

export default Form;
