import Joi from "joi";
import React from "react";
import { useState } from "react";
import Input from "../components/common/Input";

function Register(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [enableButton, setEnableButton] = useState(false);
  const schema = Joi.object({
    username: Joi.string().min(3).required().label("Username"),
    email: Joi.string()
      .min(4)
      .required()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().min(6).required(),
  });

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validate(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let userData = { ...user };
    userData[name] = value;
    setUser(userData);
    setErrors(errorData);
  };

  const validate = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[[name]] };
    const result = schema.validate(obj, subSchema);
    const { error } = result;
    console.log(error.details[0]);
    return error ? error.details[0].message : null;
  };

  const handleClick = () => {
    console.log(user);
  };

  const inputDivBClasses = () => {
    // return "col-lg-6 col-md-6 col-sm-6 mt-2 ";
    return "mt-2 ";
  };

  const mainBColumnClasses = () => {
    return "col-lg-6 col-md-6 col-sm-6 mt-2 p-2 shadow-lg";
  };

  const renderInput = (value, name, type, label) => {
    return (
      <Input
        value={value}
        onChange={handleSave}
        name={name}
        type={type}
        label={label}
        error={errors[name]}
      />
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className={mainBColumnClasses()}>
          <div className="display-6">Regsitration</div>

          <div className={inputDivBClasses()}>
            {renderInput(user.username, "username", "text", "Username")}
          </div>
          <div className={inputDivBClasses()}>
            {renderInput(user.email, "email", "text", "Email")}
          </div>
          <div className={inputDivBClasses()}>
            {renderInput(user.password, "password", "password", "Password")}
          </div>
          <button
            className="btn btn-primary mt-2"
            disabled={enableButton}
            onClick={handleClick}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
