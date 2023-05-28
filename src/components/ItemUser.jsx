import React, { memo, useEffect } from "react";

const ItemUserComponent = ({ user }) => {
  useEffect(() => {
    console.log("render ItemUser", user.name);
  });
  return <li>{user.name}</li>;
};

export default memo(ItemUserComponent);
