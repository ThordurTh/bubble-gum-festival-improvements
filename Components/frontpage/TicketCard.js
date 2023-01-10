import Anchor from "../Anchor";

function TicketCard(props) {
  return (
    <div className="ticket-card-wrapper">
      <div className="ticket-card green-border">
        <div className="heading-price">
          <h3>{props.type}</h3>
          <span>{props.price}</span>
        </div>
        <ul>
          <li>{props.li1}</li>
          <li>{props.li2}</li>
        </ul>

        <div className="buy-now">
          <Anchor href="/tickets">Buy now &#10132;</Anchor>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
