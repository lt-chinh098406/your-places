import React from "react";
import { useParams } from "react-router-dom";

import { PLACES } from "../../../factory/places/place";
import PlaceList from "../../../components/places/PlaceList";

const UserDetail = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserDetail;
