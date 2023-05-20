import React, { useState, useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wapper from '../Helpers/Wapper';

const AddUser = (props) => {
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = userNameInputRef.current.value;
    const enteredAge = userAgeInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    userNameInputRef.current.value = '';
    userAgeInputRef.current.value = '';
  };
  
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={userNameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={userAgeInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wapper>
  );
};

export default AddUser;
