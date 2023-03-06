import React from "react";

import TheInput from "../../../components/TheInput";
import TheButton from "../../../components/TheButton";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";
import "../../../assets/styles/pages/places/new/index.css";
import { useForm } from "../../../hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  return (
    <form className="new-place" onSubmit={placeSubmitHandler}>
      <TheInput
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <TheInput
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 charecters)"
        onInput={inputHandler}
      />
      <TheInput
        id="address"
        element="input"
        label="address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <TheButton type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </TheButton>
    </form>
  );
};

export default NewPlace;
