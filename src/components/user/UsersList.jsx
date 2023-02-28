import React from "react";

import UserItem from "./UserItem";
import TheCard from "../TheCard";
import "../../assets/styles/components/user/UsersList.css";

const UsersList = (props) => {
  if (!props.items.length) {
    return (
      <div className="center">
        <TheCard>
          <h2>No users found.</h2>
        </TheCard>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
