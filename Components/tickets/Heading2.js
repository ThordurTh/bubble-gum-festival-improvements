import React from "react";
import progressbar2 from "../../assets/progressbar2.png";
import Image from "next/image";

function Heading2() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <div className="step-bar-wrapper">
        <Image
          className="step-bar"
          src={progressbar2}
          alt="progressbar2"
        ></Image>
      </div>
    </>
  );
}

export default Heading2;
