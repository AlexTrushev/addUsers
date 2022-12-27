import React from "react";

import AddUserForm from "./AddUserForm";

const NewUser = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const idNumber = Math.round(Math.random() * 1000000).toString();
    const userData = {
      ...enteredUserData,
      id: idNumber,
    };
    props.onAddUser(userData);
  };

  return <AddUserForm onAddUserData={saveUserDataHandler} />;
};

export default NewUser;
