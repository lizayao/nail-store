import React, { memo, useEffect } from "react";
import ItemUserComponent from "./ItemUser";
const ListUsersComponent = ({ users }) => {
  useEffect(() => {
    console.log("render ListUsersComponent");
  });

  return (
    <ul>
      {users.map((user, index) => (
        <ItemUserComponent key={index} user={user} />
      ))}
    </ul>
  );
};

export default memo(ListUsersComponent);
