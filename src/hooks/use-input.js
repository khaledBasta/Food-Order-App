import { useState } from "react";

const useInputSec = (validateFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueValid = validateFunction(enteredValue);
  const valueHasError = !valueValid && isTouch;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouch(false);
  };

  return {
    value: enteredValue,
    isvalid: valueValid,
    hasError: valueHasError,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    reset,
  };
};

export default useInput;
