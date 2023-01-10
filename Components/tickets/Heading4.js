import React from "react";
import progressbar4 from "../../assets/progressbar4.png";
import Image from "next/image";

function Heading4() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <div className="step-bar-wrapper">
        <Image
          className="step-bar"
          src={progressbar4}
          alt="progressbar4"
        ></Image>
      </div>
    </>
  );
}

export default Heading4;
