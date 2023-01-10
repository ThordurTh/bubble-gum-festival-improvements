import TicketCard from "./TicketCard";
const ticketTypes = [
  {
    key: 1,
    type: "REG",
    li1: "Regular access to the festival",
    li2: "Regular access to Festival aminites",
    price: "799,-",
  },
  {
    key: 2,
    type: "VIP",
    li1: "Backstage access on all scenes",
    li2: "Meet and greet with artists & access to VIP lounge",
    price: "1299,-",
  },
];

function TicketSection() {
  return (
    <section className="ticket-section">
      <h2 className="underline">Tickets</h2>
      <div className="ticket-cards">
        {ticketTypes.map((item) => (
          <TicketCard
            key={item.key}
            type={item.type}
            li1={item.li1}
            li2={item.li2}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default TicketSection;
