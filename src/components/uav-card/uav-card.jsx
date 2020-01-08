import React from "react";

const UavCard = ({ uav }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={uav.Kép} alt={uav.Modell} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{uav.Modell}</p>
            <p className="subtitle is-6">{uav.Gyártó}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UavCard;
