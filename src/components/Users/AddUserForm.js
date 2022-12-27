import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Error", message: "Please enter username and age" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Error", message: "Please enter age more than 0" });
      setEnteredAge("");
      return;
    }
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onAddUserData(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
