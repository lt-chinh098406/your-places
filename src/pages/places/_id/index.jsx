import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TheInput from "../../../components/TheInput";
import TheButton from "../../../components/TheButton";
import TheCard from "../../../components/TheCard";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";
import { PLACES } from "../../../factory/places/place";
import "../../../assets/styles/pages/places/_id/index.css";
import { useForm } from "../../../hooks/form-hook";

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPalce = PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPalce) {
      setFormData(
        {
          title: {
            value: identifiedPalce.title,
            isValid: true,
          },
          description: {
            value: identifiedPalce.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPalce]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  if (!identifiedPalce) {
    return (
      <div className="center">
        <TheCard>
          <h2>Could not find place!</h2>
        </TheCard>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="detail-place" onSubmit={placeUpdateSubmitHandler}>
      <TheInput
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={true}
      />
      <TheInput
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 charecters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={true}
      />
      <TheButton type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </TheButton>
    </form>
  );
};

export default UpdatePlace;
