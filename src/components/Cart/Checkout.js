import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";

const validateTextInput = (value) => value.trim() !== "";

const validatePostalcode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateTextInput);

  const {
    value: street,
    hasError: streetHasError,
    isValid: streetIsValid,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput(validateTextInput);

  const {
    value: postalCode,
    hasError: postalCodeHasError,
    isValid: postalCodeIsValid,
    changeHandler: postalCodeChangeHandler,
    blurHandler: postalCodeBlurHandler,
    reset: postalCodeReset,
  } = useInput(validatePostalcode);

  const {
    value: city,
    hasError: cityHasError,
    isValid: cityIsValid,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput(validateTextInput);

  const formIsValid =
    nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    // Inputs considered touched if we try to submit the form
    nameBlurHandler();
    streetBlurHandler();
    postalCodeBlurHandler();
    cityBlurHandler();

    if (!formIsValid) {
      return;
    }

    nameReset();
    streetReset();
    cityReset();
    postalCodeReset();
  };

  const nameClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const streetClasses = streetHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const postalCodeClasses = postalCodeHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const cityClasses = cityHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
