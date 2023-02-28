import React from "react";

import { USERS } from "../../factory/user/user";
import UsersList from "../../components/user/UsersList";

const Users = () => {
  return <UsersList items={USERS} />;
};

export default Users;
