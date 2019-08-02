import React from "react";

export default ({ speaker, toggleModal }) => {
  return (
    <div
      className="speaker-box"
      onClick={() => toggleModal(speaker)}
      key={speaker.id}
    >
      <img src={speaker.img} />
      <div className="details">
        <div className="name">{speaker.name_only}</div>

        <div className="origin">{speaker.country}</div>
      </div>
    </div>
  );
};
