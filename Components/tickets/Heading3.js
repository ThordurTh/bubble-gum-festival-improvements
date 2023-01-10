import React from "react";
import progressbar3 from "../../assets/progressbar3.png";
import Image from "next/image";

function Heading3() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <div className="step-bar-wrapper">
        <Image
          className="step-bar"
          src={progressbar3}
          alt="progressbar3"
        ></Image>
      </div>
    </>
  );
}

export default Heading3;
