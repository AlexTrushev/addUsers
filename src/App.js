import React, { useState } from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [
  {
    id: "1",
    username: "Alex Trushev",
    age: 27,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  const onDeleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={users} onDeleteUser={onDeleteUserHandler} />
    </div>
  );
}

export default App;
