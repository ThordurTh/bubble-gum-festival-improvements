import React from "react";
function Participants(props) {
  return (
    <div className="input-wrapper">
      <div className="user-box">
        <input
          id={props.participantKey}
          name="fullName"
          type="text"
          value={props[props.participantKey]?.fullName}
          required
          onChange={(e) =>
            props.setParticipantsInfo(
              props.participantKey,
              "fullName",
              e.target.value,
              props.ticketType
            )
          }
        />
        <label htmlFor="fullName">Full Name</label>
      </div>
      <div className="user-box">
        <input
          id={props.participantKey}
          name="email"
          type="text"
          value={props[props.participantKey]?.email}
          required
          onChange={(e) =>
            props.setParticipantsInfo(
              props.participantKey,
              "email",
              e.target.value,
              props.ticketType
            )
          }
        />
        <label htmlFor="email">Email</label>
      </div>
    </div>
  );
}

export default Participants;
