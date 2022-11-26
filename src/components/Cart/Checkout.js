import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="userName" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" name="userStreet" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" name="userPostalCode" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="userCity" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
