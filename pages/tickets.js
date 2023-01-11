import Heading from "../Components/tickets/Heading";
import Selections from "../Components/tickets/Selections";
import Heading2 from "../Components/tickets/Heading2";
import Heading3 from "../Components/tickets/Heading3";
import Heading4 from "../Components/tickets/Heading4";
import LastStepForm from "../Components/tickets/LastStepForm";
import Participants from "../Components/tickets/Participants";
import BackgroundLines from "../Components/BackgroundLines";
import { useState } from "react";
import { nanoid } from "nanoid";
import clone from "just-clone";
import Image from "next/image";
import map from "../assets/map.webp";
import TimerComp from "../Components/tickets/TimerComp";
import Head from "next/head";

function Tickets({ data }) {
  const [numRegular, setNumRegular] = useState(0);
  const [numVIP, setNumVIP] = useState(0);
  const [step, setStep] = useState(0);
  const [tentForTwo, setTentForTwo] = useState(0);
  const [tentForThree, setTentForThree] = useState(0);
  const [green, setGreen] = useState(false);
  const [ownTent, setOwnTent] = useState(false);
  const [campSelect, setCampSelect] = useState("");
  const [reserveID, setReserveID] = useState("");
  const [startTimer, setStartTimer] = useState(false);

  const [participantsInfo, setParticipantsInfo] = useState({});

  const formElements = [];

  for (let x = 0; x < numRegular; x++) {
    formElements.push(
      <div key={x} className="participant">
        <h3>REG</h3>
        <Participants
          setParticipantsInfo={updateStateParticipant}
          participantKey={x}
          participantsInfo={participantsInfo}
          ticketType="Reg"
        />
      </div>
    );
  }
  for (let x = numRegular; x < numRegular + numVIP; x++) {
    formElements.push(
      <div key={x} className="participant">
        <h3>VIP</h3>
        <Participants
          setParticipantsInfo={updateStateParticipant}
          participantKey={x}
          participantsInfo={participantsInfo}
          ticketType="Vip"
        />
      </div>
    );
  }

  function updateStateParticipant(key, property, value, ticketType) {
    setParticipantsInfo((old) => {
      const copy = clone(old);

      if (typeof copy[key] !== "object") {
        copy[key] = { ticketType };
      }
      copy[key][property] = value;
      return copy;
    });
  }

  function handleReservation() {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: `{"area":${JSON.stringify(campSelect)},"amount":${JSON.stringify(
        numRegular
      )}}`,
    };
    handleNext();
    setStartTimer(true);

    fetch("http://localhost:8080/reserve-spot", options)
      .then((response) => response.json())
      .then((response) => setReserveID(JSON.stringify(response.id)))
      .catch((err) => console.error(err));
  }

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <section className="step-1">
              <Heading></Heading>

              <h3 className="underline tickets-h3">SELECT TICKET TYPES</h3>
              <section className="wrapper-step-1">
                {/* SELECTING TICKETS */}
                <div className="step-1-tickets">
                  <div className="ticket-card reg-ticket green-border">
                    <div className="tickets-wrapper-boxes">
                      <div className="head-price">
                        <h3>REG</h3>
                        <span>PRICE: 799,-</span>
                      </div>
                      <div className="desc-buttons">
                        <ul>
                          <li>Regular access to the Festival</li>
                          <li>
                            Regular access to Festival aminites and other
                            facilities
                          </li>
                        </ul>
                        <div className="tickets-buttons-wrapper">
                          <button
                            className="tickets-ticket-buttons"
                            disabled={numRegular === 0}
                            onClick={() => setNumRegular((old) => old - 1)}
                          >
                            -
                          </button>
                          <div>{numRegular}</div>
                          <button
                            className="tickets-ticket-buttons"
                            disabled={numRegular + numVIP > 3}
                            onClick={() => setNumRegular((old) => old + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ticket-card vip-ticket green-border">
                    <div className="tickets-wrapper-boxes">
                      <div className="head-price">
                        <h3 className="vip-ticket-name">VIP</h3>
                        <span>PRICE: 1299,-</span>
                      </div>
                      <div className="desc-buttons">
                        <ul>
                          <li>VIP access to the Festival</li>
                          <li>Backstage access on all scenes</li>
                          <li>
                            Meet and greet with artists & access to VIP lounge
                          </li>
                        </ul>
                        <div className="tickets-buttons-wrapper">
                          <button
                            className="tickets-ticket-buttons"
                            disabled={numVIP === 0}
                            onClick={() => setNumVIP((old) => old - 1)}
                          >
                            -
                          </button>
                          <div>{numVIP}</div>
                          <button
                            className="tickets-ticket-buttons"
                            disabled={numVIP + numRegular > 3}
                            onClick={() => setNumVIP((old) => old + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Selections
                  regularTickets={numRegular}
                  vipTickets={numVIP}
                  campingSpot={campSelect}
                  greenCamping={green}
                  tentSetup1={tentForTwo}
                  tentSetup2={tentForThree}
                  ownTent={ownTent}
                />
              </section>
            </section>
          </div>
        );
      case 1:
        return (
          // <div
          //   className={`test-step ${step === 1 ? " test-step-animation" : ""}`}
          // >
          <div>
            <section className="step-2">
              <Heading2 />
              <h3 className="underline tickets-h3">SELECT CAMPING OPTIONS</h3>
              <section className="wrapper-step-2 step-animation">
                {/* CAMPING SPOTS */}
                <div className="camping-options-form green-border">
                  <p>Available Camping Spots</p>
                  <form className="camping-spot-radio">
                    {data.map((item) => (
                      <div key={nanoid()}>
                        <label htmlFor={item.area.replaceAll(" ", "")}>
                          {item.area}
                        </label>
                        <span>{item.available}</span>
                        <input
                          type="radio"
                          id={item.area.replaceAll(" ", "")}
                          name="camping-area"
                          disabled={item.available < numRegular + numVIP}
                          value={item.area}
                          checked={campSelect === item.area}
                          onChange={() => {
                            setCampSelect(item.area);
                          }}
                        ></input>
                      </div>
                    ))}

                    <Image
                      className="map"
                      src={map}
                      alt="map of the festival"
                    />
                  </form>
                </div>
                {/* GREEN CAMPING */}
                <div className="additional-options-wrapper">
                  <div className="additional-camping-options green-border">
                    <form>
                      <label
                        htmlFor="greencamping"
                        onChange={() => setGreen((prev) => !prev)}
                      >
                        <span className="tooltip">
                          Green camping
                          <span className="tooltiptext">
                            By selecting this option, you are fighting against
                            waste during the festival, keeping the campign areas
                            clean as they were before!
                          </span>
                        </span>{" "}
                        <span>249,-</span>
                        <input
                          type="checkbox"
                          id="greencamping"
                          name="greencamping"
                          checked={green}
                          onChange={() => {
                            setGreen(green);
                          }}
                        />
                      </label>
                    </form>
                  </div>
                  {/* TENT SERVICE / OWN TENT */}
                  <div className="tents-wrapper green-border">
                    <small>
                      By checking these boxes, you agree to pay a fee, in order
                      for the festival crew to set up tents, that you can use
                      for the duration of the festival.
                    </small>
                    <div className="tent-service two-person-tent">
                      <p>2 person tent 299,-</p>
                      <div className="tent-buttons">
                        <button
                          disabled={tentForTwo === 0}
                          onClick={() => setTentForTwo((old) => old - 1)}
                        >
                          -
                        </button>
                        <div>{tentForTwo}</div>
                        <button
                          disabled={
                            numRegular + numVIP < 2 ||
                            tentForTwo === 2 ||
                            (numRegular + numVIP === 2) & (tentForTwo === 1) ||
                            tentForThree === 1 ||
                            ownTent === true
                          }
                          onClick={() => setTentForTwo((old) => old + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="tent-service three-person-tent">
                      <p>3 person tent 399,-</p>
                      <div className="tent-buttons">
                        <button
                          disabled={tentForThree === 0}
                          onClick={() => setTentForThree((old) => old - 1)}
                        >
                          -
                        </button>
                        <div>{tentForThree}</div>
                        <button
                          disabled={
                            numRegular + numVIP < 3 ||
                            tentForThree === 1 ||
                            tentForTwo >= 1 ||
                            ownTent === true
                          }
                          onClick={() => setTentForThree((old) => old + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <form>
                      <small>
                        By checking this box, you agree to bring your own tent
                        to the festival.
                      </small>
                      <label
                        className="own-tent"
                        htmlFor="owntent"
                        onChange={() => setOwnTent((prev) => !prev)}
                      >
                        <span>Already have a tent</span>
                        <input
                          type="checkbox"
                          id="owntent"
                          name="owntent"
                          checked={ownTent}
                          disabled={tentForTwo > 0 || tentForThree > 0}
                          onChange={() => {
                            setOwnTent(ownTent);
                          }}
                        />
                      </label>
                    </form>
                  </div>
                </div>
                <Selections
                  regularTickets={numRegular}
                  vipTickets={numVIP}
                  campingSpot={campSelect}
                  greenCamping={green}
                  tentSetup1={tentForTwo}
                  tentSetup2={tentForThree}
                  ownTent={ownTent}
                />
              </section>
            </section>
          </div>
        );
      case 2:
        return (
          <>
            <section className="step-3">
              <Heading3 />
              <h3 className="underline tickets-h3">FILL IN PERSONAL INFO</h3>
              <section className="wrapper-step-3 step-animation">
                <form className="participant-form green-border">
                  {formElements}
                </form>

                <Selections
                  regularTickets={numRegular}
                  vipTickets={numVIP}
                  campingSpot={campSelect}
                  greenCamping={green}
                  tentSetup1={tentForTwo}
                  tentSetup2={tentForThree}
                  ownTent={ownTent}
                />
              </section>
            </section>
          </>
        );

      default:
        return (
          <>
            <section className="step-4">
              <Heading4 />
              <h3 className="underline tickets-h3">FILL IN CREDIT CARD INFO</h3>
              <section className="wrapper-step-4 step-animation">
                <LastStepForm responseID={reserveID} />

                <Selections
                  regularTickets={numRegular}
                  vipTickets={numVIP}
                  campingSpot={campSelect}
                  greenCamping={green}
                  tentSetup1={tentForTwo}
                  tentSetup2={tentForThree}
                  ownTent={ownTent}
                  participantsInfo={participantsInfo}
                />
              </section>
            </section>
          </>
        );
    }
  };
  function handleNext() {
    window.location.href = "#";
    setStep(step + 1);
  }

  return (
    <>
      <Head>
        <title>Bubble Gum Festival - Buy Tickets</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta name="description" content="Bubble gum festival"></meta>
      </Head>
      {conditionalComponent()}
      <BackgroundLines />
      {startTimer && <TimerComp seconds="360" />}
      <div className="nextback-buttons">
        {step > 0 && (
          <button className="back-button" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}

        {step === 0 && (
          <button
            className={`next-button first-next ${
              numVIP + numRegular === 0 ? " disabled" : " "
            }`}
            disabled={numVIP + numRegular === 0}
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {step === 1 && (
          <button
            className={`next-button ${campSelect === "" ? " disabled" : " "}`}
            disabled={campSelect === ""}
            onClick={handleReservation}
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Tickets;

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
