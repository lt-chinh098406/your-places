import React, { useState } from "react";

import TheCard from "../TheCard";
import TheButton from "../TheButton";
import TheModal from "../TheModal";
import "../../assets/styles/components/places/place-item.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <TheModal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<TheButton onClick={closeMapHandler}>CLOSE</TheButton>}
      >
        <div className="map-container">
          <h2>The Map!</h2>
        </div>
      </TheModal>

      <li className="place-item">
        <TheCard className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <TheButton inverse onClick={openMapHandler}>
              VIEW ON MAP
            </TheButton>
            <TheButton to={`/places/${props.id}`}>EDIT</TheButton>
            <TheButton danger>DELETE</TheButton>
          </div>
        </TheCard>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
