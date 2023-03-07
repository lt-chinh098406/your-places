import React from "react";

import "../../assets/styles/components/places/place-list.css";
import TheCard from "../TheCard";
import TheButton from "../TheButton";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (!props.items.length)
    return (
      <div className="place-list center">
        <TheCard>
          <h2>No places found. Maybe create one?</h2>
          <TheButton to="/places/new">Share Place</TheButton>
        </TheCard>
      </div>
    );

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
