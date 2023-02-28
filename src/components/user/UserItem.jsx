import React from "react";
import { Link } from "react-router-dom";

import TheAvatar from "../TheAvatar";
import TheCard from "../TheCard";
import "../../assets/styles/components/user/UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <TheCard>
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <TheAvatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </TheCard>
    </li>
  );
};

export default UserItem;
