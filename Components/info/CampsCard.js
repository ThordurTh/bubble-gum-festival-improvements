import React from "react";
import Image from "next/image";

function CampsCard(props) {
  return (
    <>
      <article>
        <Image src={props.img} alt="img"></Image>
        <div>
          <h2>{props.infotitle}</h2>
          <p>{props.infotext}</p>
        </div>
      </article>
    </>
  );
}

export default CampsCard;
