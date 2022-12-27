import React from "react";
import styles from "./UsersList.module.css";
import UserCart from "./UserCart";
import Card from "../UI/Card";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <h1>There are no users</h1>;
  } else {
    return (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <UserCart
              key={user.id}
              id={user.id}
              username={user.username}
              age={user.age}
              onDelete={props.onDeleteUser}
            />
          ))}
        </ul>
      </Card>
    );
  }
};

// const UsersList = (props) => {
//   const thereAreUsers = (
//     <Card className={styles.users}>
//       <ul>
//         {props.users.map((user) => (
//           <UserCart
//             key={user.id}
//             id={user.id}
//             username={user.username}
//             age={user.age}
//             onDelete={props.onDeleteUser}
//           />
//         ))}
//       </ul>
//     </Card>
//   );

//   const thereAreNoUsers = <h1>There are no users</h1>;

//   return props.users.length > 0 ? thereAreUsers : thereAreNoUsers;
// };

export default UsersList;
