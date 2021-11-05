import React from "react";

function Input(props) {
  const { value, onChange, name, type, label, error } = props;
  return (
    <div className="mb-4">
      {/* <label htmlFor={name}>{label}</label> */}
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
