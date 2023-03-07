import React, { useState, useContext } from "react";

import TheCard from "../TheCard";
import TheButton from "../TheButton";
import TheModal from "../TheModal";
import { AuthContext } from "../../context/auth-context";
import "../../assets/styles/components/places/place-item.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("DELETING...");
    setShowConfirmModal(false);
  };

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

      <TheModal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <TheButton inverse onClick={cancelDeleteHandler}>
              CANCEL
            </TheButton>
            <TheButton danger onClick={confirmDeleteHandler}>
              DELETE
            </TheButton>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter
        </p>
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
            {auth.isLoggedIn && (
              <TheButton to={`/places/${props.id}`}>EDIT</TheButton>
            )}
            {auth.isLoggedIn && (
              <TheButton danger onClick={showDeleteHandler}>
                DELETE
              </TheButton>
            )}
          </div>
        </TheCard>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
