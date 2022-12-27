import React from "react";
import styles from "./UserCart.module.css";

const UserCart = (props) => {
  const onDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["users-cart"]} onClick={onDelete}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default UserCart;
