import React from "react";
import progressbar1 from "../../assets/progressbar1.png";
import Image from "next/image";

function Heading() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <div className="step-bar-wrapper">
        <Image
          className="step-bar"
          src={progressbar1}
          alt="progressbar1"
        ></Image>
      </div>
    </>
  );
}

export default Heading;
