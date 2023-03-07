import React, { useState, useContext } from "react";
import { redirect } from "react-router-dom";

import TheCard from "../../components/TheCard";
import TheButton from "../../components/TheButton";
import TheInput from "../../components/TheInput";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/auth-context";
import "../../assets/styles/pages/login/index.css";

const AuthPage = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);

    auth.login();
    redirect("/user");
  };

  const swichModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <TheCard className="login-page">
      <h2 className="login-page__header">Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <TheInput
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />
        )}
        <TheInput
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <TheInput
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at lease 5 chatacters."
          onInput={inputHandler}
        />
        <TheButton type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </TheButton>
      </form>
      <TheButton inverse onClick={swichModeHandler}>
        SWITH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </TheButton>
    </TheCard>
  );
};

export default AuthPage;
