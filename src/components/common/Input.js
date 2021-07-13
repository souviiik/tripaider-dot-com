import React from "react";

export default function Input({
  label,
  type,
  id,
  name,
  changeHandler,
  blurHandler,
  value,
}) {
  return (
    <div className="control mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input"
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
    </div>
  );
}
