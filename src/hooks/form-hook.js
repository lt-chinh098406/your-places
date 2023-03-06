import { useCallback, useReducer } from "react";

const fromReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let fromIsValue = true;

      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          fromIsValue = fromIsValue && action.isValid;
        } else {
          fromIsValue = fromIsValue && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: fromIsValue,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (inititalInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(fromReducer, {
    inputs: inititalInputs,
    isvalid: initialFormValidity,
  });

  const inputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    [dispatch]
  );

  const setFormData = useCallback(
    (inputData, formValidity) => {
      dispatch({
        type: "SET_DATA",
        inputs: inputData,
        formIsValid: formValidity,
      });
    },
    [dispatch]
  );

  return [formState, inputHandler, setFormData];
};
