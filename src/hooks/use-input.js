import { useState } from "react";

const useInput = (validateFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueValid = validateFunction(enteredValue);
  const valueHasError = !valueValid && isTouch;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouch(true);
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
    isValid: valueValid,
    hasError: valueHasError,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    reset,
    touched: setIsTouch,
  };
};

export default useInput;
