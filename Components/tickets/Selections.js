import React from "react";

function Selections({
  regularTickets,
  vipTickets,
  campingSpot,
  greenCamping,
  tentSetup1,
  tentSetup2,
  ownTent,
  participantsInfo,
}) {
  const participants = [];

  for (const key in participantsInfo) {
    if (Object.hasOwnProperty.call(participantsInfo, key)) {
      const element = participantsInfo[key];
      participants.push(
        <div key={key}>
          <p>Participant {parseFloat(key) + 1}</p>
          <ul>
            <li>
              <span>Ticket type:</span> <br />
              {element.ticketType}
            </li>
            <li>
              <span>Full name:</span> <br />
              {element.fullName}
            </li>
            <li>
              <span>Email:</span> <br />
              {element.email}
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <section className="summary green-border">
      <h3>SUMMARY</h3>

      {
        <>
          <div className="participants-details">{participants}</div>
        </>
      }
      <div className="items-container">
        <ul>
          {campingSpot !== "" && (
            <li className="selections-camping-spot">
              Camping spot: {campingSpot}
            </li>
          )}
          {regularTickets > 0 && (
            <li>
              <span>{regularTickets} x REG Ticket</span> <span></span>
              <span>{regularTickets * 799},-</span>
            </li>
          )}
          {vipTickets > 0 && (
            <li>
              <span>{vipTickets} x VIP Ticket</span>
              <span></span> <span>{vipTickets * 1299},-</span>
            </li>
          )}
          {greenCamping === true ? (
            <li>
              <span>Greencamping</span>
              <span></span>
              <span>249,-</span>
            </li>
          ) : (
            ""
          )}
          {tentSetup1 > 0 && (
            <li>
              <span>{tentSetup1} x two-person tent</span>
              <span></span>
              <span>{tentSetup1 * 299},-</span>
            </li>
          )}
          {tentSetup2 > 0 && (
            <li>
              <span>{tentSetup2} x three-person tent</span>
              <span></span>
              <span>{tentSetup2 * 399},-</span>
            </li>
          )}
          {ownTent && (
            <li>
              <span>Bringing own tent</span>
              <span></span>
              <span>0,-</span>
            </li>
          )}
          {regularTickets + vipTickets > 0 ? (
            <li>
              <span>Booking fee</span>
              <span></span>
              <span>99,-</span>
            </li>
          ) : (
            ""
          )}
        </ul>
        <ul>
          {regularTickets + vipTickets > 0 ? (
            <>
              <li className="total-amount">
                <span>TOTAL</span>
                <span></span>
                <span>
                  {(regularTickets + vipTickets > 0 ? 99 : 0) +
                    (regularTickets > 0 ? regularTickets * 799 : 0) +
                    (vipTickets > 0 ? vipTickets * 1299 : 0) +
                    (tentSetup1 > 0 ? tentSetup1 * 299 : 0) +
                    (tentSetup2 > 0 ? tentSetup2 * 399 : 0) +
                    (greenCamping === true ? 249 : 0)}
                  ,-
                </span>
              </li>

              <li className="disclaimer">
                <small>
                  A booking fee of 99,- wil be paid alongside of your purchase.
                  This is in order for us to keep improving and ensuring the
                  best experience for our customers.
                </small>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </section>
  );
}

export default Selections;
